//route里面也要return “双return”
function route(handle, pathname, response, request){
    if(typeof handle[pathname] == 'function'){
        return handle[pathname](response, request);
    }else{
        response.writeHead(500, {"contentType":"text/plain"});
        response.write("404!  NOT FOUND");
        response.end();
    }
}

exports.route = route;