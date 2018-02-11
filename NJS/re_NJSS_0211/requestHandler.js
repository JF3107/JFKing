var exec = require("child_process").exec;


function start(response, request){
    exec("dir", function(error, stdout, stderr){
        response.writeHead(200, {"contentType":"text/plain"});
        response.write(stdout);
        response.end();
    });
}

function upload(response, request){
    response.writeHead(200, {"contentType":"text/plain"});
    response.write("upload!!!!!!!");
    response.end();
}

function show(response, request){
    
}

exports.start = start;
exports.upload = upload;
exports.show = show;
