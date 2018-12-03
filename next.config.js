const { withNextein } = require('nextein/config')
const withTypescript = require('@zeit/next-typescript')
const withOffline = require('next-offline')

module.exports = withOffline(withNextein(withTypescript()))
