import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Email from './form/email';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="home-hero-img-container">
          <div className="hero-text-content">Let's get rid of the silent killer</div>
        </div>
        <div className="ui main container wide">
          <div className="ui grid">
            <div className="two wide column">
              <img className="ui medium rounded image" src="/../../images/turtle-in-net.jpeg" />
            </div>
            <div className="fourteen wide column">
              <div className="ui text">
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
            </div>
          </div>
          <div className="ui segment stats">
            <div className="ui grid">
              <div className="four wide column">
                <i className="huge circular inverted users icon center"></i>
                <h3>Users Online</h3>
                <span className="data-display">1834</span>
              </div>
              <div className="four wide column center ">
                <i className="huge circular inverted puzzle icon"></i>
                <h3>Number of Projects</h3>
                <span className="data-display">1326</span>
              </div>
              <div className="four wide column ">
                <i className="huge circular inverted ambulance icon"></i>
                <h3>NGO's Involved</h3>
                <span className="data-display">12</span>
              </div>
              <div className="four wide column">
                <i className="huge circular inverted building icon"></i>
                <h3>Corporate Partners</h3>
                <span className="data-display">56</span>
              </div>
            </div>
          </div>
          <div className="ui inverted segment email" >
            <Email />
          </div>

          <div className="ui four cards">
  <div className="card">
    <div className="image">
      {/* <a target="_blank" href="https://news.nationalgeographic.com/news/2015/02/150212-ocean-debris-plastic-garbage-patches-science/"> */}
        <img className="small" src="../../images/news/ocean-plastic.jpg"/>
      {/* </a> */}
    </div>
    <div className="extra">
      Rating:
      <div className="ui star rating" data-rating="4"></div>
    </div>
  </div>
  <div className="card">
    <div className="image">
      {/* https://www.theaustralian.com.au/business/news/mcdonalds-to-phase-out-plastic-straws-in-australia-by-2020/news-story/93247db9ad3f7d9617526b41cb55541a */}
      <img className="small" src="../../images/news/mcdonalds-phases-out-straws.jpeg"/>
    </div>
    <div className="extra">
      Rating:
      <div className="ui star rating" data-rating="2"></div>
    </div>
  </div>
  <div className="card">
    <div className="image">
      {/* <a target="_blank" href="https://www.theguardian.com/environment/2018/sep/21/lidl-to-stop-using-black-plastic-fruit-and-vegetable-packaging#img-1"> */}
      <img className="small" src="../../images/news/supermarket-dumps-plastic.jpg"/>
      {/* </a> */}
    </div>
    <div className="extra">
      Rating:
      <div className="ui star rating" data-rating="3"></div>
    </div>
  </div>
  <div className="card">
    <div className="image">
      {/* https://www.replas.com.au/products/furniture/oval-bench/ */}
      <img className="small" src="../../images/news/oval-bench.jpg"/ >
    </div>
    <div className="extra">
      Rating:
      <div className="ui star rating" data-rating="4"></div>
    </div>
  </div>
</div>

          <div className="ui grid">
            <div className="three wide column center">
              <ul>
                <li>Footer Link 1</li>
                <li>Footer Link 1</li>
                <li>Footer Link 1</li>
                <li>Footer Link 1</li>
              </ul>

            </div>
            <div className="three wide column center ">
              <ul>
                <li>Footer Link 1</li>
                <li>Footer Link 1</li>
                <li>Footer Link 1</li>
                <li>Footer Link 1</li>
              </ul>
            </div>
            <div className="three wide column ">
              <ul>
                <li>Footer Link 1</li>
                <li>Footer Link 1</li>
                <li>Footer Link 1</li>
                <li>Footer Link 1</li>
              </ul>

            </div>
        </div>
      </div>
      </div>
    );
  }
}
