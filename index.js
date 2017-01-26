import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import ready from 'detect-dom-ready';
import Routes from './Routes';

const routingStore = new RouterStore();

const stores = {
  // Key can be whatever you want
  routingStore,
  // ...other stores
};

const renderApp = (root, app, stores) => {
  const Routes = app;
  ReactDOM.render(
    <Provider {...stores}>
      <AppContainer>
        <Routes />
      </AppContainer>
    </Provider>
    , root);
}

ready(() => {
  const root$ = document.getElementById('root');
  renderApp(root$, Routes, stores);

  if (module.hot) {
    window.hot = module.hot;
    module.hot.accept('./Routes', () => {
      renderApp(root$, require('./Routes'), stores);
    });
    module.hot.accept(e => console.log('Error accepting update', e));
  }
})
