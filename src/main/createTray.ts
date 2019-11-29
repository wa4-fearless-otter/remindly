import { Menu, Tray } from 'electron';
import * as path from 'path';
import icon from './icon.png';

let tray;

export default () => {
  console.log(path.join(path.resolve(), 'dist', icon));
  tray = new Tray(path.join(path.resolve(), 'dist', icon));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' },
  ]);

  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);
};
