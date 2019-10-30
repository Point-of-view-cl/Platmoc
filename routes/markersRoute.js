const markersController = require('../controllers/markersController');
const rateLimit = require("express-rate-limit");

const limiterUpdate = rateLimit({
    windowMs: 10 * 60 * 1000, // 2 minutes
    max: 5, // limit each IP to 100 requests per windowMs
    message: "Too many accounts created from this IP, please try again after an hour"
});

const limiterNewMarker = rateLimit({
    windowMs: 10 * 60 * 1000, // 2 minutes
    max: 5, // limit each IP to 100 requests per windowMs
    message: "Too many accounts created from this IP, please try again after an hour"
});

module.exports = app => {
    app.post(
        '/markers/list',
        markersController.markersList
    );
    app.post(
        '/markers/info',
        markersController.markersInfo
    );
    app.post(
        '/markers',
        limiterNewMarker,
        markersController.markers
    );
    app.post(
        '/markers/filtered',
        markersController.markersFiltered
    );
    app.post(
        '/markers/update',
        limiterUpdate,
        markersController.markersUpdate
    );
};