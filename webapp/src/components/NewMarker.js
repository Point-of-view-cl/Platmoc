import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, TextInput, Button, CardPanel } from 'react-materialize';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import  MultiSelectReact  from 'multi-select-react';
import 'rc-time-picker/assets/index.css';
import * as actions from '../actions';

class NewMarker extends Component { 

  constructor(props){
    super(props);
    const now = moment();
    this.state = {
      nombre:'', 
      time:now,
      format: 'h:mm a',
      selectCola: [
        {value: false, label: "Ninguna", id: 1, level: 1},
        {value: false, label: "Pocas", id: 2, level: 2},
        {value: false, label: "Algunas", id: 3, level: 3},
        {value: false, label: "Muchas", id: 4, level: 4},
        {value: false, label: "No ir, esta cerrado", id: 5, level: 5}
      ],
      selectProducto: [
        {value: false, label: "Abarrotes", id: 1},
        {value: false, label: "Alimentos", id: 2},
        {value: false, label: "Bebestibles", id: 3},
        {value: false, label: "Medicamentos", id: 4},
        {value: false, label: "Alimento de mascotas", id: 5},
        {value: false, label: "Otros", id: 6},
        {value: false, label: "No ir, no hay nada", id: 7}
      ],
      error: false,
      showAviso: false,
      procesando: false
    }
  }

  optionClickedCola(optionsList) {
    this.setState({ selectCola: optionsList });
  }

  selectedBadgeClickedCola(optionsList) {
    this.setState({ selectCola: optionsList });
  }

  optionClickedProducto(optionsList) {
    this.setState({ selectProducto: optionsList });
  }

  selectedBadgeClickedProducto(optionsList) {
    this.setState({ selectProducto: optionsList });
  }

  validateForm(){
    let queue_level = -1;
    this.state.selectCola.forEach((item) => {
      if(item.value){
        queue_level = item.level;
      }
    });
    if(queue_level == -1){
      return false;
    }
    let products = [];
    this.state.selectProducto.forEach((item) => {
      if(item.value){
        products.push({name: item.label});
      }
    });
    if(products.length == 0){
      return false;
    }
    if(this.state.nombre.length == 0 || this.state.nombre.length > 60){
      return false;
    }
    return true;
  }

  onCreateNewMarker(){
    if(this.validateForm()){
      let queue_level;
      this.state.selectCola.forEach((item) => {
        if(item.value){
          queue_level = item.level;
        }
      });
      let products = [];
      this.state.selectProducto.forEach((item) => {
        if(item.value){
          products.push({name: item.label});
        }
      });
      let data = {
        lat: this.props.newMarkerLat,
        lng: this.props.newMarkerLng,
        name: this.state.nombre,
        closing_hour: this.state.time.format('HH:mm'),
        products: products,
        queue_level: queue_level
      };
      this.setState({error:false, procesando: true})
      this.props.newMarker(data).then(()=>{
        this.props.loadStaticMarkers().then(() => {
          this.props.loadMarkers().then(() => {
            this.setState({showAviso: true, procesando: false});
          });
        });
      });
    }else{
      this.setState({error:true})
    }
  }

  renderError(){
    if(this.state.error){
      return(<div style={{color:'red'}}>Tienes que ingresar toda la información porfa :)</div>);
    }
  }

  renderOptions(){
    if(this.state.showAviso){
      return(
        <div>
          <Col s={12} style={{textAlign:'center', paddingBottom: '10px'}}>
            <div style={{paddingBottom: '10px', paddingTop:'50px'}}><b>Gracias!, luego que revisemos tu aporte, lo compartiremos con todo Chile! </b></div>
            <Button  
              style={{backgroundColor: '#efcb68', color: '#000411'}}
              onClick={() => { this.props.setNewMarkerRefPointOff().then(() => this.props.setNewMarkerFromClose())}}
            >
              Ya !
            </Button >
          </Col>
        </div>
      );
    }else if(this.state.procesando){
      return(
        <div>
          <Col s={12} style={{textAlign:'center', paddingBottom: '10px'}}>
            <div style={{paddingBottom: '10px', paddingTop:'50px'}}><b>Estamos procesando!... 5 segundos porfa :)</b></div>
          </Col>
        </div>
      );
    }else{
      return(
        <div>
          <Col s={12} style={{textAlign:'center', paddingBottom: '10px'}}>
            <Button  
              style={{backgroundColor: '#efcb68', color: '#000411'}}
              onClick={ () => this.onCreateNewMarker()}
            >
              Agregar local
            </Button >
          </Col>
          <Col s={12}  style={{textAlign:'center'}}>
            <Button  
              style={{backgroundColor: '#aeb7b3', color: '#000411'}}
              onClick={() => { this.props.setNewMarkerRefPointOff().then(() => this.props.setNewMarkerFromClose())}}
            >
              Cancelar
            </Button >
          </Col>
        </div>
      );
    }
  }

  renderForm(){
    if(!this.state.procesando && !this.state.showAviso){
      const selectedOptionsStyles = {
        color: "#160c28",
        backgroundColor: "#efcb68"
      };
      const optionsListStyles = {
        backgroundColor: "#fcf8e3",
        color: "#8a6d3b"
      };
      return(
        <Col s={12} style={{marginTop:'10px'}}>
          <Col s={10} offset='s1' style={{paddingLeft:'0px', paddingRight: '0px'}}>
            <TextInput label="Nombre de la tienda" value={this.state.nombre} onChange={(event) => this.setState({nombre: event.target.value})} />
          </Col>
          <Col s={10} offset='s1' style={{textAlign:'center', paddingBottom: '10px'}}>
            <p>¿A qué hora cierra?</p>
            <TimePicker
              allowEmpty={false}
              showSecond={false}
              defaultValue={this.state.time}
              className="xxx"
              onChange={(time) => this.setState({time:time})}
              format={this.state.format}
              inputReadOnly
            />
          </Col>
          <Col s={10} offset='s1' style={{textAlign:'center', paddingBottom: '10px'}}>
            <p style={{marginBottom: '5px'}}>¿Cuánta cola hay?</p>
            <MultiSelectReact 
              options={this.state.selectCola}
              optionClicked={this.optionClickedCola.bind(this)}
              selectedBadgeClicked={this.selectedBadgeClickedCola.bind(this)}
              selectedOptionsStyles={selectedOptionsStyles}
              optionsListStyles={optionsListStyles}
              isSingleSelect={true}
            />
          </Col>
          <Col s={10} offset='s1' style={{textAlign:'center', paddingBottom: '60px'}}>
            <p style={{marginBottom: '5px'}}>¿Qué encontraste en este lugar?</p>
            <MultiSelectReact 
              options={this.state.selectProducto}
              optionClicked={this.optionClickedProducto.bind(this)}
              selectedBadgeClicked={this.selectedBadgeClickedProducto.bind(this)}
              selectedOptionsStyles={selectedOptionsStyles}
              optionsListStyles={optionsListStyles}
            />
          </Col>
          <Col s={12} style={{textAlign:'center', paddingBottom: '10px'}}>
            {this.renderError()}
          </Col>
        </Col>
      );
    }
  }

  render() {
    return (
      <div>
        <Row style={{width:'100%', position: 'absolute', paddingTop:'10px'}}>
          <Col s={8} offset='s2' style={{textAlign:'center', paddingBottom: '10px',  paddingTop: '10px', background: '#160c28', color:'#e1efe6', borderRadius:'25px'}}>
            <b>Ayúdanos a recolectar algo de información :)</b>
          </Col>
          {this.renderForm()}
          {this.renderOptions()}
        </Row>
      </div>
    )
  }
};

export default connect(null,actions)(NewMarker);