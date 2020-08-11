- koa node web 开发框架
  7天后 blog 网站

  背后的基石？
  koa 加速了 node web 开发了 一个web服务就是一个web app
  koa 在3000端口提供了HTTP协议访问服务，
  https://127.0.0.1:3000  图解HTTP

  http.createServer()
  http  node  内置模块  createServer  启动服务

  http 协议本质是？
  http 协议

  ctx context 上下文环境(request response)
  http 协议 诞生于1991年，用于传输学术论文
  采用基于请求（ctx.request)响应（ctx.response）的模式，
  在网络间传输HTML超文本的内容

- http res req 
 HTTP协议 基于请求应答模型 1991年 传输的是最简单的html 文本
 ctx.req  ctx.res

- req res  什么关系？
 n : 1  与HTTP有何关系
 n 好大的花
 createServer  I/O file

 Http 网络通信协议  TCP  7层
 流动 node流
 建立一个通信管道， stream 
 Get / 请求行
 关闭 断开连接   HTTP 可以服务于更多得用户
 释放服务器的内存

 带宽 100mb/s
req res 请求对象 响应对象
- writeHead 在做什么

-img 不能显示 怎么办
1.  img 是一个资源， http 协议访问的能力
http 接受的文件类型 未来 还有 html , css
