import React, { Component } from 'react';

import { connect } from 'react-redux';
import LeafletReactMap from '../map/leaflet-react-map';
// import Interface from '../map/interface';

import * as actions from '../../actions';

const TOKEN = 'pk.eyJ1IjoibW9ua2V5bWFwcGluZyIsImEiOiJjam4xZXV5c2EyOTE1M3dydXNsd3lvNG9hIn0.I3xKLXAmbi4cgN0-38B6ZQ';
const LONG = 24.822;
const LAT = 25.916;
const ZOOM = 1.56;
const STYLE_ID = 'monkeymapping/cjn2z6i23704i2squwgw8mhl2';


class Dashboard extends Component {

  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div className="ui map container">
        <div id="mount"></div>
      {/* <ReactMap
        token= { TOKEN }
        longitude= { LONG }
        latitude= { LAT }
        zoom= { ZOOM }
        showPopUp= { true }
        styleID = { STYLE_ID }
      /> */}
      <LeafletReactMap />

</div>
    );
  }
}


export default connect(null, actions)(Dashboard);
