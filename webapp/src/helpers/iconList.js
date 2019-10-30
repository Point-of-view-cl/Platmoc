import L from 'leaflet';

const iconMarket = new L.Icon({
    iconUrl: require('../img/market.svg'),
    iconRetinaUrl: require('../img/market.svg'),
    iconAnchor: [30, 65],
    popupAnchor: [0, 0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
});

const iconMarketMini = new L.Icon({
    iconUrl: require('../img/market.svg'),
    iconRetinaUrl: require('../img/market.svg'),
    iconAnchor: [20, 44],
    popupAnchor: [0, 0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 50),
});

const newMarker = new L.Icon({
    iconUrl: require('../img/newMarker.svg'),
    iconRetinaUrl: require('../img/newMarker.svg'),
    iconAnchor: [30, 58],
    popupAnchor: [0, 0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
});

export { iconMarket, newMarker, iconMarketMini };