const express = require('express')
const AllResturnts = express.Router()
const Resturant = require('../models/resturants')


AllResturnts.get('/', async (req, res) => {
    try {
        const rest = await Resturant.find()
        res.send({ "lenght": rest.length, "result": rest })
    } catch (error) {
        res.send(error)
    }
})

AllResturnts.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const rest = await Resturant.findById(id)
        res.send({ "success": true, "result": rest })
    } catch (error) {
        res.send(error)
    }
})

AllResturnts.get('/all', async (req, res) => {
    try {
        const rest = await Resturant.find()
        if (rest) {
            for (let i = 0; i < rest.length; i++) {
                let a = await Resturant.findByIdAndDelete(rest[i]._id)
                console.log('good');
            }
            res.send('ok')
            return
        }
        res.send('none')
    } catch (error) {
        res.send(error)
    }
})

AllResturnts.post('/', async (req, res) => {
    const body = req.body
    body.discount = 0
    body.deliveryDiscount = 0
    body.freeDelivery = false
    body.menu = []
    body.minOrder = 0
    body.stars = {
        index: 0,
        total: 0
    }
    body.orders = 0
    body.openAndCloseTime = []
    try {
        const newresturant = await Resturant.create(body)
        if (newresturant) return res.send(newresturant)
        res.send({ "success": false })
    } catch (error) {
        res.send(error)
    }
})

AllResturnts.put('/update/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body
    try {
        const update = await Resturant.findByIdAndUpdate(id, body)
        if (update) return res.send(update)
        res.send({ "success": false })
    } catch (error) {
        res.send(error)
    }
})



module.exports = AllResturnts