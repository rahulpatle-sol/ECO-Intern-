//  
const http=require('http');
const port=3000;

const server=http.createServer();
server.on('/',(req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("hello  mr manish  from  my  server");
})
server.listen(port,()=>{
    console.log(`server is running on my port ${port}`)
})