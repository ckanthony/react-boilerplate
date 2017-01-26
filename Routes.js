import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { inject, observer } from 'mobx-react'
import { syncHistoryWithStore } from 'mobx-react-router'

import App from './components';
import Welcome from './components/Welcome.jsx'
import Products from './components/Products.jsx'
import NotFound from './components/NotFound.jsx'

@inject('routingStore')
@observer
export default class Routes extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.history = syncHistoryWithStore(browserHistory, props.routingStore);
  }

  render() {
    return (<Router history={this.history}>
              <Route path='/' component={App}>
                <IndexRoute component={Welcome} />
                <Route path="/products" component={Products} />
              </Route>
              <Route path='*' components={NotFound} />
            </Router>)
  }

}
