const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/welp');
const readline = require('readline');
const fs = require('fs');
const path = require('path')
var Schema = mongoose.Schema;
var db = mongoose.connect;

//set schema
let restaurantSchema = Schema ({
  id: Number,
  name: String,
  stars: Number,
  reviewCount: Number,
  restaurantsPriceRange2: Number,
  categories: [{style: String}],
  claimed: Boolean,
  address: String,
  city: String,
  state: String,
  postalCode: String,
  neighborhood: String,
  phoneNumber: String
});
// set model
var Restaurants = mongoose.model('Restaurants', restaurantSchema);

// create readline interfase 
const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname,'sample_yelp_data.json')),
  crlfDelay: Infinity
});

// parse data and create instance of restaurants 
rl.on('line', (line) => {
  var infos = JSON.parse(line);
  var  restaurant = new Restaurants({
    id: infos.id,
    name: infos.name,
    stars: infos.stars,
    reviewCount: infos.reviewCount,
    restaurantsPriceRange2: infos.restaurantsPriceRange2,
    claimed: true,
    address: infos.address,
    city: infos.city,
    state: infos.state,
    postalCode: infos.postalCode,
    neighborhood: infos.neighborhood,
    phoneNumber: "415-726-7066"
  });
  // save document to database
  restaurant.save(function (err) {
  if (err) return console.log(err);
  })
});
// export to  use
module.export = Restaurants;