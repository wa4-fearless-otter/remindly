import * as React from 'react';
import { paramCase } from 'change-case';
import { icons, FeatherAttributes } from 'feather-icons';

export default new Proxy(
  {},
  {
    get: (target, key: string) => {
      const icon = icons[paramCase(key)];

      return ({ ...props }: FeatherAttributes) =>
        // eslint-disable-next-line react/no-danger
        icon ? <div dangerouslySetInnerHTML={{ __html: icon.toSvg(props) }} /> : null;
    },
  },
) as {
  [key: string]: ({ ...props }: { [x: string]: any }) => JSX.Element;
};
