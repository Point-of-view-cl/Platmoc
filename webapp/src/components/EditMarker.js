import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Row, Col, TextInput, Button, CardPanel } from 'react-materialize';
import  MultiSelectReact  from 'multi-select-react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import * as actions from '../actions';

class EditMarker extends Component { 

  constructor(props){
    super(props);
    const now = moment();
    this.state = {
        nombre:'', 
        time:now,
        format: 'h:mm a',
        selectCola: [
            {value: false, label: "Nada", id: 1, level: 1},
            {value: false, label: "Poco", id: 2, level: 2},
            {value: false, label: "Algo", id: 3, level: 3},
            {value: false, label: "Mucho", id: 4, level: 4}
        ],
        selectProducto: [
            {value: false, label: "Abarrotes", id: 1},
            {value: false, label: "Alimentos", id: 2},
            {value: false, label: "Bebestibles", id: 3},
            {value: false, label: "Medicamentos", id: 4},
            {value: false, label: "Otros", id: 5},
        ],
        error: false,
        showAviso: false,
        procesando: false,
        markerId: ''
    }
  }

  componentWillMount(){
      let selectColaAux = [];
      this.state.selectCola.forEach((item) => {
        if(this.props.markerEdit.markerDetail.queue_level == item.label){
            selectColaAux.push({value: true, label: item.label, id: item.id, level: item.level});
        }else{
            selectColaAux.push(item);
        }
      });
      let selectProductoAux = [];
     this.state.selectProducto.forEach((item) => {
        let encontrado = false;
        this.props.markerEdit.markerDetail.products.forEach((incomeItems) => {
            if(item.label == incomeItems){
                selectProductoAux.push({value: true, label: item.label, id: item.id});
                encontrado = true;
            }
        });
        if(!encontrado){
            selectProductoAux.push(item);
        }
     });
      this.setState({
          nombre: this.props.markerEdit.markerDetail.name,
          time: moment(this.props.markerEdit.markerDetail.until, 'HH:mm A'),
          selectCola: selectColaAux,
          selectProducto: selectProductoAux,
          markerId: this.props.markerEdit.markerDetail.id
      })
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
    return true;
  }

  onEditMarker(){
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
        marker_id: this.state.markerId,
        closing_hour: this.state.time.format('HH:mm'),
        products: products,
        queue_level: queue_level
      };
      this.setState({error:false, procesando: true})
      this.props.editMarker(data).then(()=>{
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

  renderOptions(){
    if(this.state.showAviso){
      return(
        <div>
          <Col s={12} style={{textAlign:'center', paddingBottom: '10px'}}>
            <div style={{paddingBottom: '10px', paddingTop:'50px'}}><b>Gracias!, luego que revisemos tu aporte, lo compartiremos con todo Chile! </b></div>
            <Button  
              style={{backgroundColor: '#efcb68', color: '#000411'}}
              onClick={ () => {this.props.setEditMarkerFromClose(); window.location.reload(false);}}
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
              onClick={ () => this.onEditMarker()}
            >
              Editar información
            </Button >
          </Col>
          <Col s={12}  style={{textAlign:'center'}}>
            <Button  
              style={{backgroundColor: '#aeb7b3', color: '#000411'}}
              onClick={ () => {this.props.setEditMarkerFromClose(); }}
            >
              Cancelar
            </Button >
          </Col>
        </div>
      );
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

  renderError(){
    if(this.state.error){
      return(<div style={{color:'red'}}>Tienes que ingresar toda la información porfa :)</div>);
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
            <p style={{fontSize:'25px'}}><b>{this.state.nombre}</b></p>
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
            <b>Ayúdanos a verificar lo que esta pasando :)</b>
          </Col>
          {this.renderForm()}
          {this.renderOptions()}
        </Row>
      </div>
    )
  }
};

function mapStateToProps(state){
    return {
        markerEdit: state.markerEdit
    };
};

export default connect(mapStateToProps,actions)(EditMarker);