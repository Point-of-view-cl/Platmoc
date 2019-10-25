var request = require('request');

async function markersList(req, res) {
    console.log('aqui');
    try{ 
        let headers = { 
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.API_KEY
        }
        let body = JSON.stringify(req.body);
        request.post(
            {
                url: process.env.BASE_URL+'/markers/list', headers, body
            },
            function optionalCallback(err, httpResponse, body) {
                if(err){
                    res.status(404).send(err);
                }
                res.status(200).send(body);
            }
        );
    }catch(err){
        res.status(404).send(err);
    }
}

async function markersInfo(req, res) {
    try{ 
        let headers = { 
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.API_KEY
        }
        let body = JSON.stringify(req.body);
        request.post(
            {
                url: process.env.BASE_URL+'/markers/info', headers, body
            },
            function optionalCallback(err, httpResponse, body) {
                if(err){
                    res.status(404).send(err);
                }
                res.status(200).send(body);
            }
        );
    }catch(err){
        res.status(404).send(err);
    }
}

async function markers(req, res) {
    try{ 
        let headers = { 
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.API_KEY
        }
        let body = JSON.stringify(req.body);
        request.post(
            {
                url: process.env.BASE_URL+'/markers', headers, body
            },
            function optionalCallback(err, httpResponse, body) {
                if(err){
                    res.status(404).send(err);
                }
                res.status(200).send(body);
            }
        );
    }catch(err){
        res.status(404).send(err);
    }
}

async function markersFiltered(req, res) {
    try{ 
        let headers = { 
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.API_KEY
        }
        let body = JSON.stringify(req.body);
        request.post(
            {
                url: process.env.BASE_URL+'/markers/filtered', headers, body
            },
            function optionalCallback(err, httpResponse, body) {
                if(err){
                    res.status(404).send(err);
                }
                res.status(200).send(body);
            }
        );
    }catch(err){
        res.status(404).send(err);
    }
}

async function markersUpdate(req, res) {
    try{ 
        let headers = { 
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.API_KEY
        }
        let body = JSON.stringify(req.body);
        request.post(
            {
                url: process.env.BASE_URL+'/markers/update', headers, body
            },
            function optionalCallback(err, httpResponse, body) {
                if(err){
                    res.status(404).send(err);
                }
                res.status(200).send(body);
            }
        );
    }catch(err){
        res.status(404).send(err);
    }
}

module.exports = {
    markersList,
    markersInfo,
    markers,
    markersFiltered,
    markersUpdate
};