import axios from 'axios';
import createBrowserHistory from 'history/createBrowserHistory';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const browserHistory = createBrowserHistory();
const API_URL = 'http://localhost:8000';

export function loginUser(values) {
  const { username, password } = values;
  return function(dispatch) {

    axios.post(`${API_URL}/login/`, {username, password})
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/dashboard/');
      })
      .catch(() => {
        dispatch(authError('Incorrect login details'));
      });
  }
}

export function registerUser(values) {
  const { username, email, password1, password2 } = values;
  return function(dispatch) {

    axios.post(`${API_URL}/registration/`, {username, email, password1, password2 })
      .then(response => {

        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/dashboard/');
      })
      .catch(() => {
        dispatch(authError('Incorrect registration details'));
      });
  }
}

export function logoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(API_URL)
      .then(response => {
        console.log(response);
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
