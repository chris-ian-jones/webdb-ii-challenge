const express = require('express')

const db = require('../data/db-configs.js')

const router = express.Router()

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars)
    })
    .catch(error => {
      res.status(500).json({
        message: 'Failed to retrieve cars data from database'
      })
    })
})

router.post('/', (req, res) => {
  const carData = req.body
  db('cars')
    .insert(carData)
    .then(ids => {
      db('cars').where({ id: ids[0] })
      .then(newCarEntry => {
        res.status(201).json(newCarEntry)
      })
    })
    .catch(error => {
      res.status(500).json({
        message: 'Error adding new car to database'
      })
    })
})

module.exports = router