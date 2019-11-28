import { app, BrowserWindow } from 'electron';

const isDevelopment = process.env.NODE_ENV !== 'production';
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

  window.loadFile('./index.html');

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
