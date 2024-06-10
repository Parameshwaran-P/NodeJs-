const http = require('http')

const server = http.createServer((req, res)=>{
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