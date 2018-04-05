const Waterline = require('waterline')

module.exports = Waterline.Collection.extend({
  identity: 'previlledge',

  primaryKey: 'id',
  datastore: 'default',
  attributes: {
    id: { type: 'number', autoMigrations: { autoIncrement: true } },
    name: { type: 'string' },

    // Add a reference to User
    users: {
      collection: 'user',
      via: 'previlledge_id',
      through: 'userPrevilledge'
    }
  }
})
