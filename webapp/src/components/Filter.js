import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col, Dropdown,Divider } from 'react-materialize';
import * as actions from '../actions';

class Filter extends Component {

  constructor(props){
    super(props);
    this.state = {
      itemSelected:[
        {value: false, label: "Abarrotes", id: 1},
        {value: false, label: "Alimentos", id: 2},
        {value: false, label: "Bebestibles", id: 3},
        {value: false, label: "Medicamentos", id: 4},
        {value: false, label: "Alimento de mascotas", id: 5},
        {value: false, label: "Otros", id: 6},
        {value: false, label: "No ir, no hay nada", id: 7}
      ],
      desactivado: true
    }
    this.updateCenderMap = this.updateCenderMap.bind(this);
  }

  updateCenderMap(){
    this.props.updateCenderMap();
  }

  updateItemSelected(selection){
    let auxList = [];
    this.state.itemSelected.forEach((item) => {
      if(item.id == selection){
        auxList.push({value: true, label: item.label, id: item.id})
      }else{
        auxList.push({value: false, label: item.label, id: item.id});
      }
    });
    this.setState({
      itemSelected: auxList,
      desactivado: selection == '-1' ? true:false
    });
  }

  renderFilterItems(){
    let itemList = [];
    this.state.itemSelected.forEach((item) => {
      itemList.push(
        <a 
          key={item.id}
          onClick={() => this.updateItemSelected(item.id)}
        >
          {item.value ? <i className="material-icons" style={{fontSize:"24px", color:"#160c28"}}>check</i> : null}
          {item.label}
        </a>
      );
    }, this);
    return(itemList);
  }

  async filterMarkers(){
    let activeFilver = 'none';
    this.state.itemSelected.forEach((item) => {
      if(item.value){
        activeFilver = item.label;
      }
    });
    await this.props.clearAllMarkers().then();
    await this.props.loadStaticMarkers();
    if(activeFilver != 'none'){
      await this.props.productFilter({productFilter:activeFilver});
    }else{
      await this.props.loadMarkers();
    }
    //aqui consultamos por los puntos filtrados
  }

  render() {
    return (
      <div>
        <Row style={{textAlign:'center', marginBottom: '0px', paddingLeft: '0px', paddingRight: '0px'}}>
          <Col s={3} style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <Dropdown trigger={<Button style={{backgroundColor:'#aeb7b3'}} onCloseEnd={this.filterMarkers()}><i className="material-icons" style={{fontSize:"25px", color:"black"}}>filter_list</i></Button>}>
              <a onClick={() => this.updateItemSelected('-1')}>
                {this.state.desactivado ? <i className="material-icons" style={{fontSize:"24px", color:"#160c28"}}>check</i> : null}
                Ver todo
              </a>
              {this.renderFilterItems()}
            </Dropdown>
          </Col>
          <Col s={6} style={{color:'white', paddingLeft: '0px', paddingRight: '0px', paddingTop:'5px', fontSize:'12px'}}>
            Luego de 24 Horas seguimos trabajando! Cualquier Feedback mandanos un mensaje por <b><a style={{color:'#efcb68'}} href="https://www.instagram.com/abastecete.chile/">Instagram</a></b>.
          </Col>
          <Col s={3} style={{paddingTop: '10px', paddingBottom: '10px', paddingLeft: '0px', paddingRight: '0px'}}>
            <Button
              onClick={ () => this.updateCenderMap() }
              style={{backgroundColor:'#aeb7b3'}}
            >
              <i className="material-icons" style={{fontSize:"25px", color:"black"}}>my_location</i>
            </Button >
          </Col>
        </Row>
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    globals: state.globals
  };
};

export default connect(mapStateToProps,actions)(Filter);