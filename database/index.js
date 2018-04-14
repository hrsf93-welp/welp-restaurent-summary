const mongoose = require('mongoose');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const { Schema } = mongoose;
const db = mongoose.connect('mongodb://localhost/welp');

// set schema
const restaurantSchema = Schema({
  id: Number,
  name: String,
  stars: Number,
  reviewCount: Number,
  restaurantsPriceRange2: Number,
  categories: [{ tyle: String }],
  claimed: Boolean,
  address: String,
  city: String,
  state: String,
  postalCode: String,
  neighborhood: String,
  phoneNumber: String,
});
// set model
const Restaurants = mongoose.model('Restaurants', restaurantSchema);

// create readline interfase
const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, 'sample_yelp_data.json')),
  crlfDelay: Infinity,
});
// parse data and create instance of restaurants
let allRestaurants = [];

rl.on('line', (line) => {
  const infos = JSON.parse(line);
  const restaurant = new Restaurants({
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
    phoneNumber: '415-726-7066',
  });
  // save document to database
  allRestaurants.push(restaurant);
  Restaurants.insertMany(allRestaurants, (err) => {
    if (err) {
      // console.error(err);
    }
  });
});

function fetchInfo() {
  Restaurants.find((err, results) => {
    if (err) {
      console.err(err);
    } else {
      console.log(results);
    }
  });
}
//   allRestaurants.push(restaurant);
// });
// // Restaurants.insertMany(allRestaurants, (error) => {
// //   if (error) {
// //     console.error(error);
// //   }
// // });


// db.restaurants.insertMany(allRestaurants);

// // db.restaurants.insertMany(allRestaurants);
// // export to  use
module.exports = fetchInfo;