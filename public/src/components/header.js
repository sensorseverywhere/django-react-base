import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks = () => {
    console.log(this.props.authenticated)
    if(this.props.authenticated) {
      return <li className="nav-item">
        <Link className="nav-link" to="/logout/">Logout</Link>
      </li>
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/login/">Login</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/registration/">Register</Link>
        </li>
      ];

    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Wildfire</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
