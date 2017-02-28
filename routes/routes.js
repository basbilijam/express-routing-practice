const express = require ('express')
const fs = require ('fs')

// generate a router object from the express library
// A router is sort of an empty 'app' that only has route logic
const router = express.Router()

// a route that reads text1
router.get('/file1', (req, res) => {
fs.readFile(__dirname + '/text1.txt', 'utf8', (err, data) => {
    if(err) throw err
    console.log(data)
    res.send(data)
  })
})

// a route that reads text2, yay
router.get('/file2', (req, res) => {
fs.readFile(__dirname + '/text2.txt', 'utf8', (err, data) => {
    if(err) throw err
    console.log(data)
    res.send(data)
  })
})

// exports the router so the require()
// in the main app knows what to touch
module.exports = router
