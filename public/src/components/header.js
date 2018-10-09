import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    console.log(this.props.authenticated)
    if(this.props.authenticated) {
      return <Link className="item" to="/logout/">Logout</Link>
    } else {
      return [
          <Link className="item" key={1} style={{display: 'inline', float: 'left'}} to="/login/">Login</Link>,
          <Link className="item" key={2} style={{display: 'inline', float: 'left'}} to="/registration/">Register</Link>
      ];
    }
  }

  render() {
    return (
      <div className="ui menu borderless">
        <Link to="/" className="header item">Wildfire</Link>
        <div>
          {this.renderLinks()}
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
