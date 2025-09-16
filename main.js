iconst { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 500,
        frame: false,
        icon: path.join(__dirname, 'favicon.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
}

ipcMain.on('window-minimize', () => {
    if (win) win.minimize();
});

ipcMain.on('window-close', () => {
    if (win) win.close();
});

app.whenReady().then(createWindow);
