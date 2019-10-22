import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Control from 'react-leaflet-control';
import { Button, Row, Col, Modal } from 'react-materialize';
import * as actions from '../actions';

import NewMarker from './NewMarker';
import ToolBar from './ToolBar';
import Filter from './Filter';

import {iconMarket, newMarker} from '../helpers/iconList';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      zoom: 13,
      //TODO: Cambiar a globales
      centerLat: -32.931,
      centerLng: -71.528,
      newMarkerIcon: {
        lat: -32.931,
        lng: -71.528
      }
    }
  }

  mapRef = React.createRef();

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
            icon={iconMarket}
          >
            <Popup autoPan={false}>
              <p><b>{markerData.name}</b></p>
              <p>Cosa 2{markerId}</p>
              <p>Cosa 3{markerId}</p>
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
          icon={newMarker}
        />
      );
    }
  }

  componentDidMount(){
    this.props.loadMarkers();
    /*
    let bounds = this.mapRef.current.leafletElement.getBounds();
    let mapwidh = Math.abs(bounds._northEast.lat - bounds._southWest.lat); //ancho
    let mapheight = Math.abs(bounds._northEast.lng - bounds._southWest.lng); //alto
    console.log("Se frist last coord for request");
    this.setState({
      lastLatMax: bounds._northEast.lat + mapwidh,
      lastLatMin: bounds._southWest.lat - mapwidh,
      lastLngMax: bounds._northEast.lng + mapheight,
      lastLngMin: bounds._northEast.lng - mapheight
    });
    */
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    //console.log(prevProps);
    //console.log(prevState);
    //console.log(snapshot);
    return true;
  }

  onChangeMapPosition(data){
    this.setState({
      newMarkerIcon: {
        lat: data.center[0],
        lng: data.center[1]
      }
    });
    
    //let bounds = this.mapRef.current.leafletElement.getBounds();
    //console.log(bounds._northEast.lat); //arriba derecha de la ventana
    //console.log(bounds._northEast.lng);
    //console.log(bounds._southWest.lat); //abajo izquierda de la venana
    //console.log(bounds._southWest.lng);
    //let mapwidh = Math.abs(bounds._northEast.lat - bounds._southWest.lat); //ancho
    //let mapheight = Math.abs(bounds._northEast.lng - bounds._southWest.lng); //alto
    //console.log(mapwidh);
    //console.log(mapheight);
    //console.log(bounds._northEast.lat + mapwidh); //limite superior de carga (pared de la derecha)
    //console.log(bounds._southWest.lat - mapwidh); //lminte inferior de carga (pared de la izquierda)
    //console.log(bounds._northEast.lng + mapheight); //lminte inferior de carga (techo)
    //console.log(bounds._northEast.lng - mapheight); //lminte inferior de carga (base)

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
    const displayMap = this.props.globals.newMarketFromOpen ? 'none' : 'block';
    return (
      <div>
        {this.renderNewMarkerFrom()}
        <Map 
          ref={this.mapRef}
          style={{display: displayMap}}
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

export default connect(mapStateToProps,actions)(Home);