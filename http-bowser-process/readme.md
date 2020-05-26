##  req 
浏览器：xhr  fetch
node: http.get()

不同的方式发送请求xxx -> http -> 一样的操作

http: 超文本传输
-xhr
```js
const xhr = new Xmlhttprequest();
xhr.setheader('Content-Type': 'applaction/json');
xhr.open('post','api.com',true);
xhr.onload()
xhr.send({a: 1, b:2})
```
-   浏览器拼接报文
http1.1 报文(纯文本)： 
-   首行
-   首部
-   \r\n
-   实体