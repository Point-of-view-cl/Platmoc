import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, TextInput, Button, Select } from 'react-materialize';
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
      format: 'h:mm a',
      selectCola: "0"
    }
  }

  onSelectCola(e){
    var types = {
      'checkbox': e.target.checked,
      'default': e.target.value
    };
    const value = types[e.target.type] || types['default'];
    this.setState({selectCola: value})
  }

  render() {
    console.log(this.state.time.format('HH:mm'));
    return (
      <div>
        <Row style={{width:'100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
          <Col s={8} offset='s2' style={{textAlign:'center', paddingBottom: '10px'}}>
            Ayudanos a recolectar algo de informacion :)
          </Col>
          <Col s={10} offset='s1' style={{paddingLeft:'0px', paddingRight: '0px'}}>
            <TextInput label="Nombre de la tienda" value={this.state.nombre} onChange={(event) => this.setState({nombre: event.target.value})} />
          </Col>
          <Col s={10} offset='s1' style={{textAlign:'center', paddingBottom: '10px'}}>
            ¿A que hora cierra?:{'\u00A0'}{'\u00A0'}
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
          <Col s={10} offset='s1'>
            <Select value={this.state.selectCola} onChange={(e) => this.onSelectCola(e)}>
              <option value="0" disabled>
                ¿Cuanta cola hay?
              </option>
              <option value="1">
                Nada
              </option>
              <option value="2">
                Poca
              </option>
              <option value="3">
                Algo
              </option>
              <option value="4">
                Mucha
              </option>
            </Select>
          </Col>
          <Col s={12} style={{textAlign:'center', paddingBottom: '10px'}}>
            <Button  
              style={{backgroundColor: '#efcb68', color: '#000411'}}
              onClick={ () => {this.props.setNewMarkerFromClose(); this.props.setNewMarkerRefPointOff();}}
            >
              Agregar el local
            </Button >
          </Col>
          <Col s={12}  style={{textAlign:'center'}}>
            <Button  
              style={{backgroundColor: '#aeb7b3', color: '#000411'}}
              onClick={ () => {this.props.setNewMarkerFromClose(); this.props.setNewMarkerRefPointOff();}}
            >
              Cancelar
            </Button >
          </Col>
        </Row>
      </div>
    )
  }
};

export default connect(null,actions)(NewMarker);