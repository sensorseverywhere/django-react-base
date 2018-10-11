import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="home-hero-img-container">
          <div className="hero-text-content">Let's get rid of the silent killer</div>
        </div>
        <div className="ui main container">
          <div className="ui text segment">
            <p>
              Rubbish is... everywhere, and the stats are bad. It's estimated that by 2050 there'll be more plastic in our oceans by weight than fish, and personally,
              I think that it's time we did something about it. So, here's my contribution, for what it's worth.
            </p>
            <p>
              The basic premise of the application is to start a movement in which people are paid to do the dirty work. You, me and all of us are able to select an area and
              allocate a fixed amount for the cleanup. A contractor can then opt for the job, nominating an hourly rate and work until either the job is done, or until the
              funds are dimished. Verification on the completion is handled by either a third party, photos, or both.
            </p>
            <p>
              Alongside the contractors and clients will be sponsors ( normally corporations ), and NGO's, which will help to provide some of the backbone an endeavour like this
              needs. Read more <Link className="item" to="/how-it-works/">here</Link>.
            </p>
          </div>
          <div className="ui grid segment">
            <div className="four wide column center"><i className="massive users icon center"></i></div>
            <div className="four wide column center "><i className="massive puzzle icon"></i></div>
            <div className="four wide column "><i className="massive ambulance icon"></i></div>
            <div className="four wide column"><i className="massive building icon"></i></div>
          </div>

        </div>
        {this.props.children}
      </div>
    );
  }
}
