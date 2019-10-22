import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-materialize';
import * as actions from '../actions';

class ToolBar extends Component { 

renderToolBar(){
    if(this.props.globals.newMarketShowRefPoint){
      return(
        <div>
          <Col s={6}>
            <Button  
              onClick={ () => this.props.setNewMarkerRefPointOff() }
            >
              Cancelar
            </Button >
          </Col>
          <Col s={6}>
            <Button  
              onClick={ () => this.props.setNewMarkerFromOpen() }
            >
              Continuar
            </Button >
          </Col>
        </div>
      );
    }else{
      return(
        <Button  
          onClick={ () => {
            this.props.setNewMarkerRefPointOn()} }
        >
          Nuevo punto
        </Button >
      );
    }
  }

  render() {
    return (
      <div>
          <Row style={{textAlign:'center', marginBottom: '10px'}}>
              <Col s={12} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                {this.renderToolBar()}
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

export default connect(mapStateToProps, actions)(ToolBar);