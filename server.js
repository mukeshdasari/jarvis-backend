'use strict';
let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let https = require('https');
let http = require('http');
let fs = require('fs');
const config = require("./config.json");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let httpServer = http.createServer(app);
//let httpsServer = https.createServer(credentials, app);

httpServer.listen(config.server_config.ports.http, () => { console.info("Server is running on http://localhost:" + config.server_config.ports.http); });
//httpsServer.listen(config.server_config.ports.https);