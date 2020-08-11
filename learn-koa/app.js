const http = require('http');// 内置模块
// web 编程的基石HTTP协议
http.createServer((req, res) => {
    // req, 访问者浏览器访问  res 服务器返回数据
    if (req.url === '/') {
        res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
        res.end('首页')
    }else if (req.url === '/about') {
        res.end('About');
    }
    
})
.listen(1314)