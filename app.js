// require the main express library

const express =  require ('express')

// create our app from the library

const app = express()

// import our user router

const routes = require (__dirname + '/routes/routes')

// Mount the routes of the user module on the /user path
// in other words, run the sub-app called user under '/user'
// we now have /user/new and /user/delete
app.use('/potato', routes)

// serving a static index page
app.use(express.static('public'))

// make the server listen to port 3000
app.listen(3000, f => {
  console.log('Server is running on port 3000')
})
