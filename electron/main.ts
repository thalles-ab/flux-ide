import {app, BrowserWindow} from 'electron'
let win = null

app.on('ready', () => {
    win = new BrowserWindow()
    win.loadURL(`file://${__dirname}/../proj/index.html`);
    win.openDevTools();
});