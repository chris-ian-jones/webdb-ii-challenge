const express = require('express')

const db = require('../data/db-configs.js')

const router = express.Router()

router.get('/', (req, res) => {
  res.json('api is running')
})

module.exports = router