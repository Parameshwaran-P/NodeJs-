const { text } = require('express')
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{

    const url = req.url

    if (url==='/') {
        res.setHeader('content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter form details</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>')
        res.write('</html>')
       return res.end()        
    }
    const method = req.method
    if (method==='POST' &&  url==="/message") {
        const body=[]
         req.on('data',(chunk)=>{
            body.push(chunk)
            console.log(chunk);
         })
         req.on('end',()=>{
            const parserbody= Buffer.concat(body).toString()
            const message = parserbody.split('=')
            fs.writeFileSync('p2.txt',message[1])
         })
        fs.writeFileSync('p1.txt', 'Hi hello')
        res.setHeader('Location','/')
        res.statusCode=302
        return res.end()
        
    }
        res.setHeader('content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Hi i am paramesh</title></head>')
        res.write('<body><h1>welcome nodeJS server</h1></body>')
        res.write('</html>')
        res.end()
})

server.listen(8000,()=>{
        console.log('server listning port 8000');
})