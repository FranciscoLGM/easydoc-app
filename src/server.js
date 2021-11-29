// install the server express
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/EasyDoc')); // path to the angular app

app.get('/*', function (req, res) {
  res.sendFile(path.join('/index.html', {
    root: './dist/EasyDoc'
  }));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
