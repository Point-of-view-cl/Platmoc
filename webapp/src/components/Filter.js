import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';

class Filter extends Component {

  constructor(props){
    super(props);
    this.updateCenderMap = this.updateCenderMap.bind(this);
  }

  updateCenderMap(){
    this.props.updateCenderMap();
  }

  onUpdateCenterMap(){
    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition((poss) =>{
      let lat = poss.coords.latitude;
      let lng = poss.coords.longitude;
      if(typeof(lat) !== 'undefined' && typeof(lng) !== 'undefined'){
        this.setState({
          centerLat: lat,
          centerLng: lng,
        });
      }
    },null,options);
    this.updateCenderMap();
  }

  render() {
    return (
      <div>
        {/*
        <Button
          onClick={ () => this.onUpdateCenterMap() }
          style={{marginTop: "5px",marginBottom: "5px",marginLeft: "5px", backgroundColor:'#aeb7b3'}}
        >
          <i class="material-icons" style={{fontSize:"25px", color:"black"}}>my_location</i>
        </Button >
        */}
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    globals: state.globals
  };
};

export default connect(mapStateToProps)(Filter);