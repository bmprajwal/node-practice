const fs = require('fs')

//WRITING into a file
// fs.writeFile('message.txt', 'This is a message', (err) => {
//     if (err) throw err;
//     console.log('file has been created')
// })

//READING the file
fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if(err) throw err;

    console.log(data)
})