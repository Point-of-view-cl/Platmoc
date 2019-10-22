import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Footer, Row, Col, TextInput, Button } from 'react-materialize';

import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import * as actions from '../actions';

class NewMarker extends Component { 

  constructor(props){
    super(props);
    const now = moment();
    this.state = {
      nombre:'', 
      time:now,
      format: 'h:mm a'
    }
  }

  render() {
    console.log(this.state.time.format('HH:mm'));
    return (
      <div>
        <Row style={{width:'100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
          <Col s={12}>
            TEST
          </Col>
          <Col s={12}>
            <TextInput placeholder="Nombre de la tienda" value={this.state.nombre} onChange={(event) => this.setState({nombre: event.target.value})} />
          </Col>
          <Col s={12} style={{textAlign:'center', paddingBottom: '10px'}}>
            Hora de cierre:{'\u00A0'}{'\u00A0'}
            <TimePicker
              allowEmpty={false}
              showSecond={false}
              defaultValue={this.state.time}
              className="xxx"
              onChange={(time) => this.setState({time:time})}
              format={this.state.format}
              use12Hours
              inputReadOnly
            />
          </Col>
          <Col s={12} style={{textAlign:'center', paddingBottom: '10px'}}>
            <Button  
              onClick={ () => {this.props.setNewMarkerFromClose(); this.props.setNewMarkerRefPointOff();}}
            >
              Crear punto
            </Button >
          </Col>
          <Col s={12}  style={{textAlign:'center'}}>
            <Button  
              onClick={ () => {this.props.setNewMarkerFromClose(); this.props.setNewMarkerRefPointOff();}}
            >
              Cerrar
            </Button >
          </Col>
        </Row>
      </div>
    )
  }
};

export default connect(null,actions)(NewMarker);