
var data = require('./news.json');

var news = []
    for (let i =0; i<Object.getOwnPropertyNames(data).length; i++){
        news.push(data[i]);
    }

