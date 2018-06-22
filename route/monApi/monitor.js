/*
    monitor API
*/

var net     = require('net');
var env     = require('../env').env;
var dat     = require('./process_data').data;
var ctrl    = require('./client_control').client;

var client = new net.Socket();

/* SET ENVIRONMENT SERVER CONTROLLER */
client.connect(env.server_monitor.PORT, env.server_monitor.HOST,function() {
	console.log('Connected to server-monitor:', env.server_monitor.HOST,':',env.server_monitor.PORT);
});

/* Update process with control monitor.js */
ctrl.setClient(client);

/* Data recive from server */
client.on('data', function(data) {
    client.d = data.toString(); //Data is byte
    try{
        client.d = JSON.parse(data.toString());
    } catch(e){
        console.log('ERROR: 1001 - Cannot parse-JSON draw data', 'socket-recieve');
        console.log('Error: ' + e);
        return;
    }
    dat.process_data(client);
});

/* When server or client close connection */
client.on('close', function() {
	console.log('Connection closed');
});

/* MODULE PUBLIC FROM MONITOR-MAIN client */
module.exports.client = ctrl;