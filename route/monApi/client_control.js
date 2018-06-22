var client;
var clientCtrl = {
    getMonitor: function(){
        var oCheck = {
            data: {}, 
            status: "400",
            package: 0,
            sn: "",
            token: ""
        }
        client.write(JSON.stringify(oCheck));
    },
    setClient: function(c){
        client = c;
    }
}

module.exports.client = clientCtrl;