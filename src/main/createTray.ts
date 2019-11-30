import { Menu, Tray, nativeImage } from 'electron';
import * as path from 'path';
import icon from './icon-grey.png';

let tray;

export default (menu: Menu) => {
  const image = nativeImage.createFromPath(path.join(__dirname, icon));

  tray = new Tray(image);

  tray.setContextMenu(menu);

  return tray;
};
