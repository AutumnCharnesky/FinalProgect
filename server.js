const express = require('express');
// const bodyParser = require('body-parser');
// const pg = require('pg');

const app = express();
// Serve files from public folder. That's where all of our HTML, CSS and Angular JS are.
app.use(express.static('public'));


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('JSON Server is running on ' + port);
});
