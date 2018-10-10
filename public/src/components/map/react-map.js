import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

import { clickMap, setStyle } from '../../actions/map';
import diffStyles from '../../utilities/diff.js';

class ReactMap extends Component {
  componentDidMount(){
    console.log('alsdkfjkl')
    // pass in your map properties as props to the component
    const { token, longitude, latitude, zoom, styleID } = this.props;
    const mapConfig = {
      container: 'map',
      style: `mapbox://styles/${ styleID }`,
      center: [longitude, latitude],
      zoom: zoom,
    };

    mapboxgl.accessToken = token;
    this.map = new mapboxgl.Map(mapConfig);
    // now we can access the map with this.map, just like in 'normal' js

    this.map.on('load', () => {
      const style = this.map.getStyle();
      console.log(style);
      // Do whatever you need to do once the map has loaded
    });
}



  render(){
    return (
      <div id='map'></div>
    );
  }
}

export default ReactMap;
