var express = require('express');
var app = express();
var env = require('./route/env').env;
var monitor = require('./route/monApi/monitor');
var req     = require('./route/httpController/httpreq').req;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views','./views');

req.setAppExpress(app);//Process GET/POST Method in here

setInterval(function(){
    monitor.client.getMonitor();
}, 1000);

app.listen(env.server_web.PORT, function(){
    console.log('WEB-RUNNING:', env.server_web.PORT);
});