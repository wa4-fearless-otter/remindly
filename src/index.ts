import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow | undefined;

const createWindow = () => {
  mainWindow = new BrowserWindow();

  mainWindow.loadFile(path.join(__dirname, "mainWindow/index.html"));

  mainWindow.webContents.openDevTools();

  mainWindow.on("close", () => {
    mainWindow = undefined;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
