const express = require('express');
const mongoose = require('mongoose');
require('./models/Color');

mongoose.connect(process.env.MONGO_URI);

const app = express();
const Color = mongoose.model('colors');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res, next) => {
  Color.find(req.query).then(colors => {
    res.send(colors);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
