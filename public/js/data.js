var xhttp = new XMLHttpRequest();

/*
    query   : URL to server
    method  : GET/POST
    cb      : Callback then callback(data, error); 
*/
function getToServer(query, method, cb){
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(this.responseText, this.readyState);
        }
    }
    xhttp.open(method, query, true);
    xhttp.send();
}