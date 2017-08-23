'use strict'

const got = require('got')

module.exports = ({ gender, minQuality } = {}) => {
  const query = { gender, min_quality: minQuality }

  return got('https://tinyfac.es/api/users', { json: true, query })
    .then(({ body }) => body)
    .catch(err => new TypeError(err))
}
