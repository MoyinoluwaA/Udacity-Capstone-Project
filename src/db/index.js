const dotenv = require('dotenv')
const pgp = require('pg-promise')
const promise = require('bluebird')

dotenv.config()

const pg = pgp({ promiseLib: promise, noWarnings: true })
// eslint-disable-next-line no-undef
const db = pg(process.env.DATABASE_URL)

module.exports = db