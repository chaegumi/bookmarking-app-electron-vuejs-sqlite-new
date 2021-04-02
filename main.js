const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 800,
        webPreferences: {
            nodeIntegration: true, // is default value after Electron v5
            contextIsolation: false, // protect against prototype pollution
            // preload: path.join(__dirname, 'preload.js')
        }
    })

    win.webContents.openDevTools();

    win.loadFile('index.html')
    // win.loadURL('file://' + __dirname + '/index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})