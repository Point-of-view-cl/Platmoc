import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Row, Col, Table,Button } from 'react-materialize';

class AdminPanel extends Component { 

  
  renderListByDate(){
    const sortDates = (a, b) => moment(b.created_at) - moment(a.created_at) ;
    let markersArry = [];
    Object.entries(this.props.markers).forEach(function(data) {
      const markerId = data[0];
      const markerData = data[1];
      markersArry.push(Object.assign(markerData, {id: markerId}));
    });
    let ordenados = markersArry.sort(sortDates);
    let cards = [];
    ordenados.forEach((marker) => {
      cards.push(
        <tr key={marker.id}>
          <td>
            {marker.name}
          </td>
          <td>
            {marker.enable ? 'Activado' : 'Desactivado'}
          </td>
          <td>
            {moment(marker.created_at).format('DD-MM HH:mm A')}
          </td>
          <td>
            {moment(marker.updated_at).format('DD-MM HH:mm A')}
          </td>
          <td>
            <Button  
              style={{backgroundColor: '#efcb68', color: '#000411'}}
              onClick={ () => this.props.onForceCenter(marker.lat,marker.lng, 17)  }
            >
              VER
            </Button >
          </td>
        </tr>
      );
    });
    return(cards);
  }

  render() {   
    return (
      <div>
        <Row>
          <Col s={12}>
            <Table striped={true}>
              <thead>
                <tr>
                  <th data-field="name">
                    Nombre
                  </th>
                  <th data-field="enable">
                    Estado
                  </th>
                  <th data-field="lastChange">
                    Fecha de creacion (ORDENADO DESCENDIENTE)
                  </th>
                  <th data-field="lastChange">
                    Fecha de actualizacion (Ignorar)
                  </th>
                  <th data-field="Go">
                    Ir
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.renderListByDate()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    )
  }
};

function mapStateToProps(state){
    return {
      markers: state.markers.markers,
      globals: state.globals
    };
  };

export default connect(mapStateToProps)(AdminPanel);