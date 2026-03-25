#pragma once

#include <QMainWindow>

#ifdef ONVIF_WITH_OPENCV
#include "rtsp_stream_player.hpp"
#endif

class QLineEdit;
class QPushButton;
class QTextEdit;
class QLabel;
class QTimer;

class MainWindow : public QMainWindow {
  Q_OBJECT

public:
  explicit MainWindow(QWidget *parent = nullptr);

private slots:
  void onConnectClicked();
  void onStopVideoClicked();
  void onVideoTick();

private:
  void appendLog(const QString &line);

  QLineEdit *deviceUrlEdit_;
  QLineEdit *userEdit_;
  QLineEdit *passEdit_;
  QPushButton *connectBtn_;
  QPushButton *stopVideoBtn_;
  QTextEdit *logEdit_;
  QLabel *videoLabel_;
  QTimer *videoTimer_;

#ifdef ONVIF_WITH_OPENCV
  onvif::RtspStreamPlayer rtspPlayer_;
#endif
};
