var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1360,
      height: 800,
      resizable: false,
      autoHideMenuBar: true,
      frame: false
  });

  mainWindow.loadURL('file://' + __dirname + '/public/index.html');

  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
