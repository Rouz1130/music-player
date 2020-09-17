const { app, BroswerWindow} = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BroswerWindow({
    width: 640,
    height: 640,
    webPrefrences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL (
    url.format({
      pathname: path.join(_dirname, `/dist/index.html`),
      protocol: 'file:',
      slashes: true
    })
  );

  mainWindow.on('closed', function() {
    mainWindow = null
  })

}

app.on('ready', createWindow) 

app.on('window-all-closed', function (){
  if( process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
  if(mainWindow === null) createWindow()
})