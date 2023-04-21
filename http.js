const http = require('http')
const path = require('path')
const fs = require('fs')
const PORT = 3000

const server = http.createServer((req, res) => {
    // if(req.url === '/'){
    //     res.write("Welcome to home page")
    //     res.end()
    // }
    // if(req.url === '/user'){
    //     res.write("Hello there User")
    //     res.end()
    // }
    if (req.url === '/'){
        fs.readFile(path.join(__dirname, 'transform.html'),(err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            res.end()
        })
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})