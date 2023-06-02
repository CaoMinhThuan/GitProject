const http = require(`http`)
const fs = require(`fs`)

const server = http.createServer(
    (req,res) =>{
        fs.readFile(`./index.html`,`utf8`,
            (err,str) =>{
            if (err){
                res.writeHead(400,{'Content-Type': 'text/html'})
                return res.end(`Error`)
            }
                {
                    res.writeHead(200,{'Content-Type': 'text/html'})
                    return res.end(str)

                }
            }
            )
    }
)
server.listen(8000,()=>{
    console.log(`Server running in http://localhost:8000`)
})