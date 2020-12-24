import React, { Fragment } from 'react';
import { render } from 'react-dom';
// import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';

import './app.global.css';
import App from './containers/App';

// const store = configuredStore();

// const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  // // eslint-disable-next-line global-require
  // const Root = require('./containers/Root').default;
  render(
    // <AppContainer>
      <App />,
    // </AppContainer>,
    document.getElementById('root')
  );
});
