const http = require('http');
const fs = require('fs');
const qs = require('qs');
const { log } = require('console');
const Categories = require('./models/category.model');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./showpromt.html', 'utf-8', (err, data) => {
            if (err) {
                console.log(err.message)
            }
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        }
        )
    
    } else {
        let data = ''
        req.on('data', chunk => {
            data += chunk
        })
        req.on('end',async () => {
            let category = qs.parse(data)
            fs.readFile('./showpromt.html', 'utf8', async (err, datahtml) => {
                if (err) {
                    console.log(err.message)
                }
                datahtml = datahtml.replace('style="display: none;"', '');
                datahtml = datahtml.replace('<span id="categoryName"></span>', category.category); // Thay đổi nội dung của alert
                await Categories.addCategories(category.category);
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(datahtml)
            res.end()
            })
            
        })
    }
})
server.listen(8080, 'localhost', () => {
    console.log(`Runnig`)
})