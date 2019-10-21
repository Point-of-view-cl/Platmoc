import update from 'react-addons-update';

var defaultValues = {
  markers: {
      a0001:{
        lat: 51.505,
        lng: -0.09
      },
      a0002:{
        lat: 50.505,
        lng: -0.09
      },
  }
}

export default function(state = defaultValues , action) {
  switch (action.type){
    default:
      return state;
  }
}