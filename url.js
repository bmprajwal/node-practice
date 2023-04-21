const { parse } = require('path')
const url = require('url')

const address = "https://www.google.com/maps/@13.0484674,77.510282,19z?name=Prajwal&age=20"

const parsedUrl = url.parse(address, true)

// console.log(parsedUrl)
console.log(parsedUrl.hostname)
console.log(parsedUrl.pathname)
console.log(parsedUrl.query)
console.log(parsedUrl.query.name)