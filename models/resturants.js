const mongoose = require('mongoose');

const resturantSchema = new mongoose.Schema({
    name: String,
    coords: {
        "latitude": Number,
        "longitude": Number
    },
    logo: String,
    img: String,
    type: String,
    discount: Number,
    deliveryDiscount: Number, // corrected typo in property name
    freeDelivery: Boolean,    // corrected typo in property name
    menu: [],
    minOrder: Number,          // corrected typo in property name
    openAndCloseTime: [],
    stars: {
        index: Number,
        total: Number
    },
    city: String,
    state: String,
    paktype: Number,
    orders: Number
});

const Resturant = mongoose.model('Resturant', resturantSchema);

module.exports = Resturant;
