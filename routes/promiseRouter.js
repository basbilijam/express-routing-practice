const express = require ('express')
const fs = require ('fs')

// generate a router object from the express library
// A router is sort of an empty 'app' that only has route logic
const router = express.Router()

const promise = require (__dirname + '/promise')

// a route that reads users1
router.get('/users1', (req, res) => {
  promise(__dirname + '/users1.json')
  .then(function(data){
    res.send(data)
  })
})

router.get('/users2', (req, res) => {
  promise(__dirname + '/users2.json')
  .then(function(data){
    res.send(data)
  })
})

module.exports = router
