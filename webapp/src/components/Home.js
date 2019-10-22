import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Control from 'react-leaflet-control';
import { Button, Row, Col, Modal } from 'react-materialize';
import * as actions from '../actions';

import NewMarker from './NewMarker';
import ToolBar from './ToolBar';
import Filter from './Filter';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      zoom: 13,
      //TODO: Cambiar a globales
      centerLat: 51.505,
      centerLng: -0.09,
      newMarkerIcon: {
        lat: 51.505,
        lng: -0.09
      }
    }
  }

  renderMarker(){
    const items = [];
    if(!this.props.globals.newMarketShowRefPoint){
      Object.entries(this.props.markers).forEach(function(data) {
        const markerId = data[0];
        const markerData = data[1];
        items.push(
          <Marker 
            key={markerId} 
            position={[markerData.lat, markerData.lng]}
          >
            <Popup>
              Mi ID es: {markerId}
            </Popup>
          </Marker>
        );
      });
    }
    return(<div>{items}</div>);
  }

  renderNewMarketIcon(){
    if(this.props.globals.newMarketShowRefPoint){
      return(
        <Marker 
          position={[this.state.newMarkerIcon.lat, this.state.newMarkerIcon.lng]}
        />
      );
    }
  }

  onChangeMapPosition(data){
    this.setState({
      newMarkerIcon: {
        lat: data.center[0],
        lng: data.center[1]
      }
    })
  }

  renderNewMarkerFrom(){
    if(this.props.globals.newMarketFromOpen){
      return(
        <NewMarker
          newMarkerLat={this.state.newMarkerIcon.lat}
          newMarkerLng={this.state.newMarkerIcon.lng}
        />
      );
    }
  }
 
  render() {
    return (
      <div>
        {this.renderNewMarkerFrom()}
        <Map 
          style={{display: this.props.globals.newMarketFromOpen ? 'none' : 'bock'}}
          center={[this.state.centerLat,this.state.centerLng]}
          zoom={this.state.zoom}
          onViewportChange={(data) => this.onChangeMapPosition(data)}
          zoomControl={false}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.renderMarker()}
          {this.renderNewMarketIcon()}
          <Control position="topleft" >
            <Filter/>
          </Control>
          <Control position="bottomleft" >
            <ToolBar/>
          </Control>
        </Map>
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    markers: state.markers.markers,
    globals: state.globals
  };
};

export default connect(mapStateToProps)(Home);