import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, TextInput, Button, Select } from 'react-materialize';
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
        {value: false, label: "Nada", id: 1},
        {value: false, label: "Poco", id: 2},
        {value: false, label: "Algo", id: 3},
        {value: false, label: "Mucho", id: 4}
      ],
      selectProducto: [
        {value: false, label: "Bencian", id: 1},
        {value: false, label: "Abarrote", id: 2},
        {value: false, label: "Medicamentos", id: 3}
      ]
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

  render() {
    const selectedOptionsStyles = {
      color: "#160c28",
      backgroundColor: "#efcb68"
    };
    const optionsListStyles = {
      backgroundColor: "#fcf8e3",
      color: "#8a6d3b"
    };
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
          <Col s={10} offset='s1' style={{textAlign:'center', paddingBottom: '10px'}}>
            <p style={{marginBottom: '5px'}}>¿Cuanta cola hay?</p>
            <MultiSelectReact 
              options={this.state.selectCola}
              optionClicked={this.optionClickedCola.bind(this)}
              selectedBadgeClicked={this.selectedBadgeClickedCola.bind(this)}
              selectedOptionsStyles={selectedOptionsStyles}
              optionsListStyles={optionsListStyles}
              isSingleSelect={true}
            />
          </Col>
          <Col s={10} offset='s1' style={{textAlign:'center', paddingBottom: '10px'}}>
            <p style={{marginBottom: '5px'}}>¿ Que encontraste en este lugar?</p>
            <MultiSelectReact 
              options={this.state.selectProducto}
              optionClicked={this.optionClickedProducto.bind(this)}
              selectedBadgeClicked={this.selectedBadgeClickedProducto.bind(this)}
              selectedOptionsStyles={selectedOptionsStyles}
              optionsListStyles={optionsListStyles}
            />
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