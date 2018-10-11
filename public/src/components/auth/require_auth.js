import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated || this.props.authenticated !== true) {
        console.log(this.props.authenticated);
        browserHistory.push('/');
        return <Redirect to="/login" />;
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
