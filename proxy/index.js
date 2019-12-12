const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));


app.get("/app1", function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: 'http://localhost:3003'});
});

app.get("/restaurantReviews/*", function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: 'http://localhost:3003'});
});

app.listen(port, console.log(`Listening on port ${port}`));


