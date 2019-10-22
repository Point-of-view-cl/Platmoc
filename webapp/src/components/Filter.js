import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filter extends Component { 

  render() {
    return (
      <div>
         FILTRO
      </div>
    )
  }
};

export default connect()(Filter);