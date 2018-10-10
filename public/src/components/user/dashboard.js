import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMap from '../map/react-map';
import Interface from '../map/interface';


import * as actions from '../../actions';

const TOKEN = 'pk.eyJ1IjoibW9ua2V5bWFwcGluZyIsImEiOiJjam4xZXV5c2EyOTE1M3dydXNsd3lvNG9hIn0.I3xKLXAmbi4cgN0-38B6ZQ';
const LONG = -122.66661759147235;
const LAT = 45.51886025215052;
const ZOOM = 14.26;
const STYLE_ID = 'ryantm/cj8m5f0136ll12sk7nm8dj00k';

class Dashboard extends Component {

  componentWillMount() {
    console.log('dashboard');
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
      {/* <Interface /> */}
      <ReactMap
        token= { TOKEN }
        longitude= { LONG }
        latitude= { LAT }
        zoom= { ZOOM }
        showPopUp= { true }
        styleID = { STYLE_ID }
      />
      
</div>
    );
  }
}


export default connect(null, actions)(Dashboard);
