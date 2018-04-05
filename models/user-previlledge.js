const Waterline = require('waterline')

module.exports = Waterline.Collection.extend({
  identity: 'userPrevilledge',
  tableName: 'user_previlledge',

  primaryKey: 'id',
  datastore: 'default',
  attributes: {
    id: { type: 'number', autoMigrations: { autoIncrement: true } },
    user_id: {
      model: 'user'
    },
    previlledge_id: {
      model: 'previlledge'
    }
  }
})
