"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var win = null;
electron_1.app.on('ready', function () {
    win = new electron_1.BrowserWindow();
    win.loadURL("file://" + __dirname + "/../proj/index.html");
    win.openDevTools();
});
