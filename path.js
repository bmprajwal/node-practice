const path = require('path')

const fileLocation = path.join(__dirname, 'filo.js')
// console.log(`FileLocation: ${fileLocation}`)

const fileName = path.basename(fileLocation)
// console.log(fileName)

// console.log(__filename)
// console.log(__dirname)

const fileExt = path.extname(fileName)
console.log(fileExt)