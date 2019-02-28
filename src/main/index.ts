/*import { app, BrowserWindow } from "electron";
import * as path from "path";

const isDevelopment = process.env.NODE_ENV !== "production";
let mainWindow: BrowserWindow | undefined;

const createWindow = () => {
  mainWindow = new BrowserWindow();

  mainWindow.loadFile(path.join(__dirname, "renderer/index.html"));

  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

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
});*/

import { app, dialog, Tray, Menu, nativeImage } from "electron";
import * as path from "path";
import * as icon from "./../assets/icon.png";

app.on("ready", () => {
  const image = nativeImage.createFromPath(path.join(__dirname, icon));
  const tray = new Tray(image);
  const trayMenu = Menu.buildFromTemplate([
    {
      label: "Settings",
      click: () => console.log("Opening settings...")
    },
    {
      label: "Quit",
      click: () => {
        dialog.showMessageBox({
          message: "Do you really want to quit?",
          buttons: ["Yes", "No", "Cancel"]
        }, (response) => {
          if (response === 0) {
            app.quit();
          }
        });
      }
    }
  ]);

  tray.setContextMenu(trayMenu);
});
