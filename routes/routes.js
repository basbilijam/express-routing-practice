const express = require ('express')

// generate a router object from the express library
// A router is sort of an empty 'app' that only has route logic
const router = express.Router()

// exports the router so the require()
// in the main app knows what to touch
module.exports = router
