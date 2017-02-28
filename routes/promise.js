const fs = require ('fs')
const express = require('fs')

const readJSON = (target) => {
  return new Promise((resolve, reject) => {
    fs.readFile( target, (err, data) => {
      // Throw error if there is an error
      if (err) return reject (err)
      // display content of reads file
      // the resolve will send data to the .then() called after the execution of readjson
      resolve (JSON.parse(data))
      console.log(data)
    })
  })
}

module.exports = readJSON
