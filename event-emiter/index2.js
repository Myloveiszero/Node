const EventEmitter = require('events');
class Ev extends EventEmitter{};

const ev =  new Ev();

['search', 'choose'].foeEach(key => {
    ev.on(key, async function(...args) {
        const fn = require(`./lib/${key}`);
        const res = await fn(...args);
        console.log('res 执行的结果', res);
        ev.emit('handle', ker, res, ...args);
    })
})
ev.on('afterSearch', function(data, keyword) {
    if(!data || !data.result || !data.result.songs){
        
    }
})
function main (arg) {
        let keyword = arg[2];
        console.log(keyword);
        ev.emit('search', keyword); 
       
}
main(process.argv);
