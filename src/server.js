// install the server express
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/src/app/components/home'));  // assets/ico/menu.svg

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/home.component.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080); //src\app\components\home\home.component.html