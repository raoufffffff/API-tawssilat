const express = require('express')
const Ads = require('../models/ads')
const ads = express.Router()


ads.get('/', async (req, res) => {
    console.log('hello from ads');
    try {
        const resultads = await Ads.find()
        res.send(resultads)
    } catch (error) {
        res.send(error)
    }
})

ads.post('/', async (req, res) => {
    const newads = req.body
    const id = '65b43815eb72e027f5afe8e5'
    try {
        const resultads = await Ads.findById(id)
        resultads.imgs = newads.imgs
        const result = await Ads.findByIdAndUpdate(id, resultads)
        if (result) return res.send('ok')
    } catch (error) {
        res.send(error)
    }
})





module.exports = ads