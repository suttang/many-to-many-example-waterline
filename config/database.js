const MySQLAdapter = require('sails-mysql')

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_DATABASE
} = process.env

const config = {
  adapters: {
    'sails-mysql': MySQLAdapter
  },
  datastores: {
    default: {
      adapter: 'sails-mysql',
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      port: MYSQL_PORT || 3306,
      database: MYSQL_DATABASE
    }
  },
  defaultModelSettings: {
    primaryKey: 'id',
    datastore: 'default',
    attributes: {
      id: { type: 'number', autoMigrations: { autoIncrement: true } },
    }
  }
}

module.exports = config
