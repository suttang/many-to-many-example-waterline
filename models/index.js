const Waterline = require('waterline')

const config = require('../config/database')
const User = require('./user')
const Previlledge = require('./previlledge')
const UserPrevilledge = require('./user-previlledge')

const waterline = new Waterline()
let model

waterline.registerModel(User)
waterline.registerModel(Previlledge)
waterline.registerModel(UserPrevilledge)

module.exports = {}

const initialize = () => {
  return new Promise((resolve, reject) => {
    waterline.initialize(config, (error, ontology) => {
      if (error) {
        reject(error)
        return
      }

      const keys = Object.keys(ontology.collections)
      for (const key of keys) {
        module.exports[key] = ontology.collections[key]
      }

      model = ontology

      resolve(ontology)
    })
  })
}

module.exports.initialize = initialize
