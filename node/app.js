const { text } = require('express')
const http = require('http')
const reqestHandler = require('./router')

const server = http.createServer(reqestHandler)

server.listen(8000,()=>{
        console.log('server listning port 8000');
})