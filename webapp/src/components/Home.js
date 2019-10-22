import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Control from 'react-leaflet-control';
import { Button } from 'react-materialize';


class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      zoom: 13,
      centerLat: 51.505,
      centerLng: -0.09,
      newMarketOn: true,
      newMarkerIcon: {
        lat: 0,
        lng: 0
      }
    }
  }

  renderMarker(){
    const items = [];
    Object.entries(this.props.markers).forEach(function(data) {
      const markerId = data[0];
      const markerData = data[1];
      items.push(
        <Marker 
          key={markerId} 
          position={[markerData.lat, markerData.lng]}
          //draggable={true}
        />
      );
    });
    return(<div>{items}</div>);
  }

  renderNewMarketIcon(){
    if(this.state.newMarketOn){
      return(
        <Marker position={[this.state.newMarkerIcon.lat, this.state.newMarkerIcon.lng]}/>
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
 
  render() {
    return (
      <div>
        <Map 
          center={[this.state.centerLat,this.state.centerLng]}
          zoom={this.state.zoom}
          onViewportChange={(data) => this.onChangeMapPosition(data)}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.renderMarker()}
          {this.renderNewMarketIcon()}
          <Control position="topleft" >
            <Button  
              onClick={ () => this.setState({bounds: [51.3, 0.7]}) }
            >
              Nuevo punto
            </Button >
          </Control>
        </Map>
        
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    markers: state.markers.markers
  };
};

export default connect(mapStateToProps)(Home);