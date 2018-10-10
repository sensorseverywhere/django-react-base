import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import { Router, Route } from 'react-router';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Register from './components/auth/register';
import RequireAuth from './components/auth/require_auth';
import Header from './components/header';
import Dashboard from './components/user/dashboard';

import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const browserHistory = createBrowserHistory();

const token = localStorage.getItem('token');
if(token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={App} />
          {/* <Route component={Home}/> */}
          <Route path="/login/" component={Login} />
          <Route path="/logout/" component={Logout} />
          <Route path="/registration/" component={Register} />
          <Route path="/dashboard/" component={RequireAuth(Dashboard)} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
