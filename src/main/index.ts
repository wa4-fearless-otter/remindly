import { app, dialog, BrowserWindow, Menu } from 'electron';
import createTray from './createTray';

const isDevelopment = process.env.NODE_ENV === 'development';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let settingsWindow: BrowserWindow;

const openSettings = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDevelopment) {
    window.webContents.openDevTools();
  }

  window.loadFile('index.html');

  settingsWindow = window;

  return window;
};

const startup = () => {
  createTray(
    Menu.buildFromTemplate([
      { label: 'Open settings', click: openSettings },
      { type: 'separator' },
      {
        label: 'Quit',
        click: () => {
          const buttons = ['Yes', 'No', 'Cancel'];

          dialog
            .showMessageBox({
              type: 'question',
              buttons,
              message: 'Do you really want to quit remindly?',
            })
            .then(({ response }) => buttons[response] === 'Yes' && app.quit());
        },
      },
    ]),
  );

  if (isDevelopment) {
    openSettings();
  }
};

app.on('ready', startup);
