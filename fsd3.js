const http = require('http');
const server= http.createServer((req,res)=>{
    if(req.method==='post'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            console.log('Recevied data:',body);
            res.writeHead(200,{'content-type':'text/plain'});
            res.end('data received successfully');

        });
    }else {
         res.writeHead(200,{'content-type':'text/html'});
         res.end(`
            <h1>Data transfer Demo</h1>  
            <from method="POST">
            <intput type='text name="message"placeholder="enter message">
            <button type="submit">send Data</button>
            </form>
                 
        ` );

        }
    });
    const PORT=3001;
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});