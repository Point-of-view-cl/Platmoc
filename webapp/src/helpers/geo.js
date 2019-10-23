import React from "react";
import { geolocated } from "react-geolocated";
 
class Geo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userLat: 0,
            userLng: 0
        };
    }

    componentDidUpdate(prevProps){
        if(this.props.isGeolocationAvailable){
            if(this.props.isGeolocationEnabled){
                console.log(this.props.coords.latitude);
                console.log(this.props.coords.longitude);
                alert(this.props.coords.longitude);
                console.log(navigator.geolocation.getCurrentPosition((poss) => console.log(poss.coords.latitude)));
                //this.setState({userLat: this.props.coords.latitude, userLng:this.props.coords.longitude});
            }  
        }
        return true;
      }

    render() {
        return(<div></div>);
    }
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geo);