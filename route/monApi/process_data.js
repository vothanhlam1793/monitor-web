var datarunning = {};
module.exports.data = {
    process_data: function(c){
        switch (c.d.status) {
            case "400": {
                datarunning = c.d.data;
            }
            break;
            case "100":{
                c.d.package = c.d.package+1;
                c.write(JSON.stringify(c.d));
            }
            break;
            default:{

            }
        }
    }
}

module.exports.rDataSystem = function(){
    return datarunning;
} 