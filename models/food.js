const moongose = require('mongoose')

const food = new moongose.Schema({
    name: String,
    price: Number,
    ownerid: String,
    type: String,
    img: String,
    description: String,
    special: {
        req: Boolean,
        titel: String,
        option: [
            {
                name: String,
                price: Number
            },
            {
                name: String,
                price: Number
            }
        ]
    }

})

const Food = moongose.model('Food', food)

module.exports = Food