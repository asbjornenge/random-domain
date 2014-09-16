var domain = require('random-word')
var tld    = require('domains')

module.exports = function () {
    return domain()+'.'+tld[Math.floor((Math.random() * tld.length-1) + 1)]
}
