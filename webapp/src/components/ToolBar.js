import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-materialize';
import * as actions from '../actions';

class ToolBar extends Component { 

renderToolBar(){
    if(this.props.globals.newMarketShowRefPoint){
      return(
        <div>
          <Col s={5} offset='s1'>
            <Button  
              style={{backgroundColor: '#aeb7b3', color: '#000411'}}
              onClick={ () => this.props.setNewMarkerRefPointOff() }
            >
              Cancelar
            </Button >
          </Col>
          <Col s={4}>
            <Button
              style={{backgroundColor: '#efcb68', color: '#000411'}}
              onClick={ () => this.props.setNewMarkerFromOpen() }
            >
              Continuar
            </Button >
          </Col>
        </div>
      );
    }else{
      return(
        <div>
          <Button
              style={{backgroundColor: '#efcb68', color: '#000411'}}
              onClick={ () => {
                this.props.setNewMarkerRefPointOn()} }
            >
              Agregar local
            </Button >
        </div>
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