
//Main Process Script here

const electron = require("electron");
const path = require('path')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const url = require('url');

let window;

//Function to create BrowserWindow

function createWindow() {
    window = new BrowserWindow({
        height:1600,
        width:1400
    });
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'Renderers/index.html'),
        protocol: 'file',
        slashes: true
    }));
    window.on('closed', () => {
        window = null;
    });
    window.once('ready-to-show',()=>{
        window.show();
    });
}

//Creating window when the app is ready
app.on('ready', createWindow);