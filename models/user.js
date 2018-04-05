const Waterline = require('waterline')

module.exports = Waterline.Collection.extend({
  identity: 'user',

  primaryKey: 'id',
  datastore: 'default',
  attributes: {
    id: { type: 'number', autoMigrations: { autoIncrement: true } },
    account: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },

    // Add a reference to Previlledge
    previlledges: {
      collection: 'previlledge',
      via: 'user_id',
      through: 'userPrevilledge'
    }
  }
})
