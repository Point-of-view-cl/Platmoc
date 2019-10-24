import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import Control from 'react-leaflet-control';
import { Card, Button, Col } from 'react-materialize';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import * as actions from '../actions';

import NewMarker from './NewMarker';
import ToolBar from './ToolBar';
import Filter from './Filter';
import EditMarker from './EditMarker';

import {iconMarket, newMarker} from '../helpers/iconList';
import Row from 'react-materialize/lib/Row';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      zoom: 8,
      newMarkerIcon: {
        lat: -33.019,
        lng: -71.550
      },
      centerMap:{
        lat: -33.317,
        lng: -71.103
      }
    }
    this.onClickCenterMap = this.onClickCenterMap.bind(this);
  }

  mapRef = React.createRef();

  renderMarker(){
    const items = [];
    //if(!this.props.globals.newMarketShowRefPoint){
      Object.entries(this.props.markers).forEach(function(data) {
        const markerId = data[0];
        const markerData = data[1];
        const editButton = (
          <p>
            <Button
              style={{backgroundColor: '#efcb68', color: '#000411'}}
              onClick={ () => this.props.setEditMarkerFromOpen({id: markerId, name: markerData.name, until:this.props.markerDetail.markerDetail.until , queue_level:this.props.markerDetail.markerDetail.queue_level , products: this.props.markerDetail.markerDetail.products}) }
              disabled={this.props.markerDetail.ready ? false : true}
            >
              Actualizar información
            </Button >
          </p>
        );
        items.push(
          <Marker
            style={{color:'red'}}
            key={markerId} 
            position={[markerData.lat, markerData.lng]}
            icon={iconMarket}
            onClick={() => {
              if(markerData.marker_type==1){
                this.props.unLoadMarkerDetail().then(() => this.props.getMarketDetail({id: markerId}));
              }
            }}
          >
            <Popup autoPan={false}>
              <p style={{fontSize:'18px'}}><b>{markerData.name}</b></p>
              <p><b>Cantidad de Personas:</b> {markerData.marker_type == 1 ? (this.props.markerDetail.ready ? this.props.markerDetail.markerDetail.queue_level : 'Cargando') : 'Estamos averiguando para usted ♥'}</p>
              <p><b>Puedes encontrar:</b> {markerData.marker_type == 1 ? (this.props.markerDetail.ready ? this.props.markerDetail.markerDetail.products.join(', ') : 'Cargando') : 'Estamos averiguando para usted ♥'}</p>
              <p><b>Hora de cierre:</b> {markerData.marker_type == 1 ? (this.props.markerDetail.ready ? this.props.markerDetail.markerDetail.until : 'Cargando') : markerData.until}</p>
              {markerData.marker_type == 1 ? editButton: <div></div>}
            </Popup>
          </Marker>
        );
      },this);
    //}
    return(
      <MarkerClusterGroup 
        disableClusteringAtZoom={18} 
        spiderfyDistanceMultiplier={5}
        spiderfyOnMaxZoom={false} 
      >
      {items}
      </MarkerClusterGroup>
    );
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

  async componentDidMount(){
    //TODO: Ahora la carga de los puntos la gatilla el filtro, eso tiene que cambiar 
    //await this.props.clearAllMarkers();
    //await this.props.loadStaticMarkers();
    //await this.props.loadMarkers();
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

  onClickCenterMap(){
    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };
    //if(!this.props.globals.fristMapCenter){
      navigator.geolocation.getCurrentPosition((poss) =>{
        let lat = poss.coords.latitude;
        let lng = poss.coords.longitude;
        if(typeof(lat) !== 'undefined' && typeof(lng) !== 'undefined'){
          this.setState({
            newMarkerIcon: {
              lat: lat,
              lng: lng
            },
            centerMap:{
              lat: lat,
              lng: lng
            },
            zoom: 14
          });
        }
      },null,options);
    //}
  }

  onChangeMapPosition(data){
    this.setState({
      newMarkerIcon: {
        lat: data.center[0],
        lng: data.center[1]
      },
      centerMap:{
        lat: data.center[0],
        lng: data.center[1]
      },
      zoom: data.zoom
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

  renderEditMarkerFrom(){
    if(this.props.globals.editMarketFromOpen){
      return(
        <EditMarker/>
      );
    }
  }

  //TODO: OJO NOMBRE
  /*
  updateCenderMap(){
    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition((poss) =>{
      let lat = poss.coords.latitude;
      let lng = poss.coords.longitude;
      if(typeof(lat) !== 'undefined' && typeof(lng) !== 'undefined'){
        //TODO: ENVIAR AQUI 
        this.props.setNewCerterMap({lat,lng});
        this.forceUpdate();
      }
    },null,options);
  }
  */

  render() {
    const displayMap = this.props.globals.newMarketFromOpen ? 'none' : 'block' && this.props.globals.editMarketFromOpen ? 'none' : 'block';
    return (
      <div>
        {/*
        <Card
          style={{
            display:displayMap,
            position:'absolute',
            width:'100%',
            zIndex:'100000',
            borderRadius: '40px',
            fontSize: '12px',
            textAlign:'center'
          }}
          className="blue-grey darken-1"
          textClassName="white-text"
        >
          <Row style={{marginBottom:'0px'}}>
            <Col s={8}>
              Luego de 24 Horas seguimos trabajando! Cualquier Feedback mandanos un mensaje por <b><a href="https://www.instagram.com/abastecete.chile/">Instagram</a></b>.
            </Col>
            <Col s={4}>
              <Button
                onClick={ () => this.onClickCenterMap() }
                style={{backgroundColor:'#aeb7b3'}}
              >
                <i className="material-icons" style={{fontSize:"25px", color:"black"}}>my_location</i>
              </Button >
            </Col>
          </Row>
        </Card>
        */}
        {this.renderNewMarkerFrom()}
        {this.renderEditMarkerFrom()}
        <Map 
          maxZoom={18}
          minZoom={5}
          ref={this.mapRef}
          style={{display: displayMap}}
          center={[this.state.centerMap.lat,this.state.centerMap.lng]}
          zoom={this.state.zoom}
          onViewportChange={(data) => this.onChangeMapPosition(data)}
          zoomControl={false}
          //TODO:Ver como arreglar la animacion 
          animate={false}
        >
          <TileLayer
            attribution='&amp;copy OpenStreetMap \m/ <font color="#160c28"> Con ♥ por Sudo B00yz</font>'
            //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
          />
          {this.renderMarker()}
          {this.renderNewMarketIcon()}

          <Control position="topleft">
            <Filter updateCenderMap={this.onClickCenterMap}/>
          </Control>

          <Control position="bottomleft" >
            <ToolBar/>
          </Control>

          <ZoomControl position={"bottomleft"}/>

        </Map>
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    markers: state.markers.markers,
    globals: state.globals,
    markerDetail: state.markerDetail
  };
};

export default connect(mapStateToProps,actions)(Home);