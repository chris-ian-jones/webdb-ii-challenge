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

router.post('/', validateCarData, (req, res) => {
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

// custom middleware to validate new car data has required fields
function validateCarData(req, res, next) {
  if (!req.body.VIN) {
    res.status(400).json({
      message: 'Invalid Car data, need VIN'
    })
  } else if (!req.body.MAKE) {
    res.status(400).json({
      message: 'Invalid Car data, need MAKE'
    })
  } else if (!req.body.MODEL) {
    res.status(400).json({
      message: 'Invalid Car data, need MODEL'
    })
  } else if (!req.body.MILEAGE) {
    res.status(400).json({
      message: 'Invalid Car data, need MILEAGE'
    })
  } else {
    next()
  }
}

module.exports = router