const express = require('express')

// const db = require()

const router = express.Router()

router.get('/', (req, res) => {
  res.json('api is running')
})

module.exports = router