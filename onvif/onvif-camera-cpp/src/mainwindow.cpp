#include "mainwindow.h"

#include "onvif_client.hpp"
#include "result.hpp"
#include <QApplication>
#include <QFormLayout>
#include <QHBoxLayout>
#include <QLabel>
#include <QLineEdit>
#include <QMessageBox>
#include <QPushButton>
#include <QTextEdit>
#include <QTimer>
#include <QVBoxLayout>
#include <QWidget>

#ifdef ONVIF_WITH_OPENCV
#include <opencv2/imgproc/imgproc.hpp>
#include <opencv2/opencv.hpp>
#include <QImage>
#include <QPixmap>
#if CV_MAJOR_VERSION >= 3
#define ONVIF_CV_BGR2RGB cv::COLOR_BGR2RGB
#else
#define ONVIF_CV_BGR2RGB CV_BGR2RGB
#endif
#endif

namespace {

QString buildDeviceUrl(const QString &input) {
  if (input.contains(QStringLiteral("://"))) {
    return input;
  }
  return QStringLiteral("http://") + input +
         QStringLiteral("/onvif/device_service");
}

} // namespace

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent), deviceUrlEdit_(nullptr), userEdit_(nullptr),
      passEdit_(nullptr), connectBtn_(nullptr), stopVideoBtn_(nullptr),
      logEdit_(nullptr), videoLabel_(nullptr), videoTimer_(nullptr) {
  setWindowTitle(QStringLiteral("ONVIF Camera (Qt)"));
  resize(960, 600);

  QWidget *central = new QWidget(this);
  setCentralWidget(central);

  deviceUrlEdit_ = new QLineEdit(central);
  deviceUrlEdit_->setPlaceholderText(
      QStringLiteral("192.168.1.100 or http://host/onvif/device_service"));
  userEdit_ = new QLineEdit(central);
  passEdit_ = new QLineEdit(central);
  passEdit_->setEchoMode(QLineEdit::Password);

  connectBtn_ = new QPushButton(QStringLiteral("Connect"), central);
  stopVideoBtn_ = new QPushButton(QStringLiteral("Stop video"), central);
  stopVideoBtn_->setEnabled(false);

  logEdit_ = new QTextEdit(central);
  logEdit_->setReadOnly(true);

  videoLabel_ = new QLabel(central);
  videoLabel_->setMinimumSize(320, 240);
  videoLabel_->setAlignment(Qt::AlignCenter);
  videoLabel_->setStyleSheet(QStringLiteral("QLabel { background: #222; color:#888; }"));
  videoLabel_->setText(QStringLiteral("No video"));

  QFormLayout *form = new QFormLayout(central);
  form->addRow(QStringLiteral("Device / URL:"), deviceUrlEdit_);
  form->addRow(QStringLiteral("User:"), userEdit_);
  form->addRow(QStringLiteral("Password:"), passEdit_);

  QHBoxLayout *btnRow = new QHBoxLayout();
  btnRow->addWidget(connectBtn_);
  btnRow->addWidget(stopVideoBtn_);
  btnRow->addStretch();

  QVBoxLayout *leftCol = new QVBoxLayout();
  leftCol->addLayout(form);
  leftCol->addLayout(btnRow);
  leftCol->addWidget(new QLabel(QStringLiteral("Log:"), central));
  leftCol->addWidget(logEdit_, 1);

  QVBoxLayout *rightCol = new QVBoxLayout();
  rightCol->addWidget(new QLabel(QStringLiteral("Preview:"), central));
  rightCol->addWidget(videoLabel_, 1);

  QHBoxLayout *mainLay = new QHBoxLayout(central);
  mainLay->addLayout(leftCol, 1);
  mainLay->addLayout(rightCol, 1);

  videoTimer_ = new QTimer(this);
  videoTimer_->setInterval(33);
  connect(videoTimer_, &QTimer::timeout, this, &MainWindow::onVideoTick);
  connect(connectBtn_, &QPushButton::clicked, this,
          &MainWindow::onConnectClicked);
  connect(stopVideoBtn_, &QPushButton::clicked, this,
          &MainWindow::onStopVideoClicked);

  appendLog(QStringLiteral("Ready. Set GSOAP_ROOT and run qmake from project directory."));
}

void MainWindow::appendLog(const QString &line) {
  logEdit_->append(line);
}

void MainWindow::onConnectClicked() {
  videoTimer_->stop();
#ifdef ONVIF_WITH_OPENCV
  videoLabel_->clear();
  videoLabel_->setText(QStringLiteral("Connecting…"));
#endif

  const QString raw = deviceUrlEdit_->text().trimmed();
  if (raw.isEmpty()) {
    QMessageBox::warning(this, QStringLiteral("Input"),
                         QStringLiteral("Enter camera IP or device URL."));
    return;
  }

  const QString url = buildDeviceUrl(raw);
  const std::string surl = url.toStdString();
  const std::string user = userEdit_->text().toStdString();
  const std::string pass = passEdit_->text().toStdString();

  connectBtn_->setEnabled(false);
  QApplication::setOverrideCursor(Qt::WaitCursor);

  onvif::OnvifClient client;
  if (!client.initialize()) {
    QApplication::restoreOverrideCursor();
    connectBtn_->setEnabled(true);
    appendLog(QStringLiteral("initialize failed: ") +
              QString::fromUtf8(client.lastResult().message.c_str()));
    return;
  }
  client.setCredentials(user, pass);
  const bool ok = client.connectDevice(surl);

  QApplication::restoreOverrideCursor();
  connectBtn_->setEnabled(true);

  if (!ok) {
    const onvif::Result &r = client.lastResult();
    appendLog(QStringLiteral("connectDevice failed: ") +
              QString::fromUtf8(onvif::onvifErrorString(r.code)) +
              QStringLiteral(" — ") +
              QString::fromUtf8(r.message.c_str()));
    videoLabel_->setText(QStringLiteral("No video"));
    return;
  }

  const onvif::CameraConnectionInfo &info = client.connectionInfo();
  appendLog(QStringLiteral("Media: ") +
            QString::fromUtf8(info.services.media.c_str()));
  appendLog(QStringLiteral("Profile: ") +
            QString::fromUtf8(info.selected_profile_token.c_str()));
  appendLog(QStringLiteral("Stream: ") +
            QString::fromUtf8(info.stream_uri.c_str()));
  if (!info.services.ptz.empty()) {
    appendLog(QStringLiteral("PTZ: ") +
              QString::fromUtf8(info.services.ptz.c_str()));
  }

#ifdef ONVIF_WITH_OPENCV
  rtspPlayer_.close();
  if (!info.stream_uri.empty() &&
      !rtspPlayer_.open(std::string(info.stream_uri))) {
    appendLog(QStringLiteral("RTSP: ") +
              QString::fromUtf8(rtspPlayer_.lastError().message.c_str()));
    videoLabel_->setText(QStringLiteral("RTSP failed"));
    return;
  }
  stopVideoBtn_->setEnabled(true);
  videoTimer_->start();
  appendLog(QStringLiteral("Video timer started."));
#else
  videoLabel_->setText(
      QStringLiteral("OpenCV disabled (rebuild with CONFIG+=with_opencv)"));
#endif
}

void MainWindow::onStopVideoClicked() {
  videoTimer_->stop();
#ifdef ONVIF_WITH_OPENCV
  rtspPlayer_.close();
#endif
  stopVideoBtn_->setEnabled(false);
  videoLabel_->setText(QStringLiteral("No video"));
  appendLog(QStringLiteral("Video stopped."));
}

void MainWindow::onVideoTick() {
#ifdef ONVIF_WITH_OPENCV
  if (!rtspPlayer_.isOpen()) {
    return;
  }
  cv::Mat frame;
  if (!rtspPlayer_.read(frame) || frame.empty()) {
    return;
  }
  cv::Mat rgb;
  cv::cvtColor(frame, rgb, ONVIF_CV_BGR2RGB);
  if (!rgb.isContinuous()) {
    rgb = rgb.clone();
  }
  QImage img(rgb.data, rgb.cols, rgb.rows, static_cast<int>(rgb.step),
             QImage::Format_RGB888);
  QImage safe = img.copy();
  QPixmap pm = QPixmap::fromImage(safe);
  videoLabel_->setPixmap(pm.scaled(videoLabel_->size(), Qt::KeepAspectRatio,
                                   Qt::SmoothTransformation));
#endif
}
