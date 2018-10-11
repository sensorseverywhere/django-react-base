import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

import { clickMap, setStyle } from '../../actions/map';
import diffStyles from '../../utilities/diff.js';

const mapTiles = 'https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}';
const mapAttr = 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';


export default class LeafletReactMap extends Component {

    state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 1.6,
      position: [39.9528, -75.1638],
  }

  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.on('zoomend', () => {
      const updatedZoomLevel = leafletMap.getZoom();
          this.handleZoomLevelChange(updatedZoomLevel);
    });
  }

  handleZoomLevelChange(newZoomLevel) {
    this.setState({ currentZoomLevel: newZoomLevel });
  }

  render(){
    return (
      <Map
        ref={m => { this.leafletMap = m;}}
        center={this.state.position}
        zoom={this.state.zoom}>
        <TileLayer
          attribution={mapAttr}
          url={mapTiles}
        />

      </Map>
    );
  }
}

render ( <LeafletReactMap />, document.getElementById('mount'));
