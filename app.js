// require the main express library

const express =  require ('express')

// create our app from the library

const app = express()

// import our user router

const routes = require (__dirname + '/routes/routes')

const promise = require (__dirname + '/routes/promiseRouter')

// Mount the routes of the routes module on the /potato path
// in other words, run the sub-app called routes under '/potato'
// we now have /potato/text1 and potato/text1
app.use('/potato', routes)

app.use('/users', promise)

// serving a static index page
app.use(express.static('views'))

// make the server listen to port 3000
app.listen(3000, f => {
  console.log('Server is running on port 3000')
})
