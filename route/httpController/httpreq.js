var p = require('../monApi/process_data');
var app;
module.exports.req = {
    setAppExpress: function(a){
        app = a;
        runApp();
    }
}
var runApp = function(){
    app.get('/', function(req, res){
        res.render('index');
    });

    app.get('/home', function(req, res){
        res.render('home');
    });

    app.get('/system', function(req, res){
        res.send(JSON.stringify(p.rDataSystem()));
        res.end();
    });
    app.get('/*', function(req, res){
        res.render('error');
    })
}
