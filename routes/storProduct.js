const express = require('express')
const StorProduct = require('../models/storProduct')
const StorProductRoute = express.Router()


StorProductRoute.get('/', async (req, res) => {
    try {
        const result = await StorProduct.find()
        if (result) return res.send({ "success": true, "result": result })
        res.send({ "success": false })
    } catch (error) {
        res.send(error)
    }
})


StorProductRoute.post('/', async (req, res) => {
    const body = req.body
    console.log(body);
    try {
        const result = await StorProduct.create(body)
        if (result) return res.send({ "success": true, "result": result })
        res.send({ "success": false })
    } catch (error) {
        res.send(error)
    }
})

module.exports = StorProductRoute