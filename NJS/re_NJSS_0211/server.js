var http = require("http");
var url = require("url");

//没必要把原先server中的一切都包进去！... var-require系完全可以留在外面的。
function start(route, handle){
    
    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response, request);
    }).listen(8888);
    console.log("the SERVER started");

}

exports.start = start;