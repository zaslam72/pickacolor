const mongoose = require('mongoose');
const { Schema } = mongoose;

const colorSchema = new Schema({
  name: String,
  hexCode: String,
  colorGroup: String
});

mongoose.model('colors', colorSchema);
