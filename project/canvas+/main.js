const {app, BrowserWindow} = require('electron')

function createWindow () {
  var win = new BrowserWindow({width: 1024, height: 768})
  win.loadURL('file://' + __dirname + '/index.html')
}

app.on('ready', createWindow)
