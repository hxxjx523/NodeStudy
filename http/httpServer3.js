const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const server = http.createServer();

server.on('request', async(req, res)=>{

    try{
        const data = await fs.readFile("./apple.html");
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
        console.log("method : ", req.method);
        console.log("url1", req.url);
        console.log("url2", url.parse(req.url));
        console.log("url2-1",url.parse(req.url).pathname);
        console.log("url3",url.parse(req.url).query);
    }catch(err){
        console.log(err)
        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
        res.end("err : ", err.mesaage);

    }
});

server.listen(8088);
server.on('listening', ()=>{
    console.log("여기")
})
 