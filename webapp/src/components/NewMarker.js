import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewMarker extends Component { 

  render() {
    return (
      <div>
         VENTANA PARA CREAR PUNTO
      </div>
    )
  }
};

export default connect()(NewMarker);