var app           = require('app');
var ipc           = require('ipc');
var autoAlcher    = require('./autoAlcher.js');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadUrl('file://' + __dirname + '/main.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  ipc.on('alch-number', function(event, args) {
    autoAlcher.start(args);
  });

});