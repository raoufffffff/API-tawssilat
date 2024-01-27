const moongose = require('mongoose')

const storProduct = new moongose.Schema({
    name: String,
    type: String,
    img: String
})

const StorProduct = moongose.model('StorProduct', storProduct)

module.exports = StorProduct