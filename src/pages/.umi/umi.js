import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'umi/_createHistory';
import FastClick from 'umi-fastclick';
import createHashHistory from 'history/createHashHistory';


document.addEventListener(
  'DOMContentLoaded',
  () => {
    FastClick.attach(document.body);
  },
  false,
);

// create history
window.g_history = createHistory({
  basename: window.routerBase,
});
window.g_history = createHashHistory();


// render
function render() {
  const DvaContainer = require('./DvaContainer').default;
ReactDOM.render(React.createElement(
  DvaContainer,
  null,
  React.createElement(require('./router').default)
), document.getElementById('root'));
}
render();

// hot module replacement
if (module.hot) {
  module.hot.accept('./router', () => {
    render();
  });
}
