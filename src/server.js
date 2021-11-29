// install the server express
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/EasyDoc'));  // path to the angular app

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/main.889a03fc6e31e984.js')); 
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);