const mongoose = require('mongoose');

const ads = mongoose.Schema({
    type: String,
    imgs: []
})

const Ads = mongoose.model('ads', ads);




module.exports = Ads;
