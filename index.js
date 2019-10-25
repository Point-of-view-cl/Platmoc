require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rateLimit = require("express-rate-limit");
var sslRedirect = require('heroku-ssl-redirect');

//TODO: Agregar HTTPS
//TODO: Control de DDOS
//TODO: JWT: HttpOnly y otros metodos de seguridad

const app = express();

const limiterGeneral = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150 // limit each IP to 100 requests per windowMs
});

//Use SSL
app.use(sslRedirect());

//Limitadores
app.use(limiterGeneral);

//Control de acceso
/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
*/

//Formato de consultas
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Bypass para cliente
app.use(express.static('webapp/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'webapp', 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log('Server ON, port:', process.env.PORT);
});

require('./routes/markersRoute')(app);