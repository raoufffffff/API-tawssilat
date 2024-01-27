const express = require('express')
const foodroute = express.Router()
const Food = require('../models/food')
const Resturant = require('../models/resturants')

foodroute.get('/', async (req, res) => {
    try {
        const result = await Food.find()
        if (result) return res.send({ "lenght": result.length, "result": result })
        res.send({ "success": false })
    } catch (error) {
        res.send(error)
    }
})

foodroute.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await Food.findById(id)
        if (result) return res.send({ "success": true, "result": result })
        res.send({ "success": false })
    } catch (error) {
        res.send(error)
    }
})

foodroute.get('/menu/:id', async (req, res) => {
    const { id } = req.params
    console.log(id);
    try {
        const result = await Food.find()
        if (result) {
            console.log(result);
            const menu = result.filter(e => e.ownerid === id)
            res.send({ "length": menu.length, "result": menu })
            return
        }
        res.send({ "success": false })
    } catch (error) {
        res.send(error)
    }
})


foodroute.post('/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body
    try {
        const resturant = await Resturant.findById(id)
        if (resturant) {
            const result = await Food.create(body)
            console.log(result);
            if (result) return res.send({ "success": true, "result": result })
            res.send({ "success": false })
            return
        }
        res.send({ "message": "the resturat not exist our you need to log in your resturant account" })
    } catch (error) {
        res.send(error)
    }
})



module.exports = foodroute