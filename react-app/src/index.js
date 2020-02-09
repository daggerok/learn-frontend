import React from 'react';
import ReactDOM from 'react-dom';

import './index.sass';

// import { dom, library } from '@fortawesome/fontawesome-svg-core';
// import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
// // We are only using the user-astronaut icon
// library.add(faUserAstronaut);
// // Replace any existing <i> tags with <svg> and set up a MutationObserver to
// // continue doing this as the DOM changes.
// dom.watch();

import App from './app/App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
