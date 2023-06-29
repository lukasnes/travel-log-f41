require('dotenv').config()
let places = require('./db.json')

const { ROLLBAR_CODE } = process.env

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: ROLLBAR_CODE,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

module.exports = {
    getPlaces: (req,res) => {
      res.status(200).send(places)
    },
    addPlace: (req,res) => {

    }
}