import { app, BrowserWindow } from 'electron';
import createTray from './createTray';

const isDevelopment = process.env.NODE_ENV === 'development';
let mainWindow: BrowserWindow;

const createMainWindow = () => {
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

  createTray();

  return window;
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});
