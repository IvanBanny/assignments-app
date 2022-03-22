const {BrowserWindow, app} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 500,
        minHeight: 700,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('src/index.html');

    //win.webContents.openDevTools();
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
