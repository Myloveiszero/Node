const Koa = require('koa');//引入koa
const app = new Koa();//web server
const fs = require('fs');
// const func = ctx => {
//     console.log('func');
//     ctx.response.body = 'func';
// }

const main = ctx => {
    console.log(ctx.request,'--------------');
    // ctx.response.body = '三千浮华，一世迷离'
    ctx.response.type = 'html';
    const html = fs.readFileSync('./template.html','utf-8');
    // fs.readFileSync('./template.html','utf-8',function(err,data) {
    //     console.log(data);
    // });

    ctx.response.body = html;
   
}
// app.use(func);
app.use(main);//启用了一个服务，给访问者request用
app.listen(3000);