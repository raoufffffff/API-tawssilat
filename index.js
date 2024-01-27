const express = require('express')
const cors = require('cors')
const moongose = require('mongoose')
const app = express()
const AllResturnts = require('./routes/resturantRoute')
const ads = require('./routes/ads')
const foodroute = require('./routes/food')
const StorProductRoute = require('./routes/storProduct')
app.use(express.json())
app.use(cors());


const PORT = process.env.PORT || 7000


app.use('/resturant', AllResturnts)
app.use('/food', foodroute)
app.use('/StorProduct', StorProductRoute)
app.use('/ads', ads)
app.get('/', (req, res) => {
    console.log('good request');
    res.send('hello')
})

console.log('good');
app.listen(PORT)

moongose
    .connect('mongodb+srv://raoufhamoudi1999:wweraw22@cluster0.7vncoe4.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("mriglla")

    })
    .catch(err => console.log(err))
