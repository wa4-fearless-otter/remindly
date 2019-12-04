import 'normalize.css';
import * as React from 'react';
import { render } from 'react-dom';
import Theme from './shared/Theme';
import App from './App';

render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root'),
);
