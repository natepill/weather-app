const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const HouseSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true }
});

module.exports = mongoose.model("House", HouseSchema);


// const House = mongoose.model('House', {
//   address: String,
//   lat: Number,
//   lng: Number
// });

// module.exports = House
