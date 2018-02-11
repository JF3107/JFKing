var exec = require("child_process").exec;
var fs = require("fs");
var formidable = require("formidable");

//关于meta，记好了！：<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
//还有form，记好了！：<form action="/upload" method="post" enctype="multipart/form-data" >
//Content-Type!!!
function start(response, request){
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post" enctype="multipart/form-data" >'+
        '<input type="file" name="upload" multiple="multiple" />'+
        '<input type="submit" value="UP LOAD!!" />'+
        '</form>'+
        '</body>'+
        '<html>';
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();

}

function upload(response, request){
    var form = new formidable.IncomingForm();
    form.uploadDir = "tmp";
    form.parse(request, function(error, fields, files){
        fs.renameSync(files.upload.path, './tmp/6666.png');
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("THE IMAGE: <br />");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response, request){
    fs.readFile("./tmp/6666.png", "binary", function(err, file){
        if(err){
            response.writeHead(500, {"contentType":"text/plain"});
            response.write("ERROR! >>"+err);
            response.end();
        }else{
            response.writeHead(200, {"contentType":"image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
