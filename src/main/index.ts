import { app, BrowserWindow, dialog, Tray, Menu, nativeImage } from "electron";
import * as path from "path";
import * as icon from "./../assets/icon.png";

const isDevelopment = process.env.NODE_ENV !== "production";
let settingsWindow: BrowserWindow | undefined;

const openSettingsWindow = () => {
  settingsWindow = new BrowserWindow();

  settingsWindow.loadFile(path.join(__dirname, "renderer/index.html"));

  if (isDevelopment) {
    settingsWindow.webContents.openDevTools();
  } else {
    settingsWindow.setMenuBarVisibility(false);
  }

  settingsWindow.on("close", () => {
    settingsWindow = undefined;
  });
}

const openCloseWindow = () => {
  dialog.showMessageBox({
    message: "Do you really want to quit?",
    buttons: ["Yes", "No", "Cancel"]
  }, (response) => {
    if (response === 0) {
      app.quit();
    }
  });
}

app.on("ready", () => {
  const image = nativeImage.createFromPath(path.join(__dirname, icon));
  const tray = new Tray(image);
  const trayMenu = Menu.buildFromTemplate([
    {
      label: "Settings",
      click: openSettingsWindow
    },
    {
      label: "Quit",
      click: openCloseWindow
    }
  ]);

  tray.setContextMenu(trayMenu);
});

app.on("window-all-closed", (e: Event) => e.preventDefault());
