#include "mainwindow.h"

#include <QApplication>
#include <QCoreApplication>
#include <QtGlobal>

int main(int argc, char *argv[]) {
#if QT_VERSION >= QT_VERSION_CHECK(5, 6, 0) && QT_VERSION < QT_VERSION_CHECK(6, 0, 0)
  QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);
#endif
#if QT_VERSION >= QT_VERSION_CHECK(5, 8, 0) && QT_VERSION < QT_VERSION_CHECK(6, 0, 0)
  QCoreApplication::setAttribute(Qt::AA_UseHighDpiPixmaps);
#endif
  QApplication app(argc, argv);
  MainWindow w;
  w.show();
  return app.exec();
}
