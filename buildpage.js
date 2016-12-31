var inline = require('web-resource-inliner')
var httpServer = require('http-server')
const fs = require('fs')
var fetchUrl = require("fetch").fetchUrl;

var server = httpServer.createServer();
server.listen(8080);
fetchUrl("http://localhost:8080/", function(error, meta, body) {
    //console.log(body.toString());
    inline.html({
        fileContent: body.toString(),
        relativeTo: ".",
        images: true
    }, function(error, htmlFinal) {
        if (error) {
            console.log(error)
            return
        }
        console.log(htmlFinal)
            //var htmlResult = htmlFinal.replace(ir.tag, ir.tagresult)
            //var hash = SHA256(htmlResult).toString()
        fs.writeFileSync('dist/sapp.html', htmlFinal, 'utf8')
            //info.release.hash = hash
            //return cb(null, "ok")
        server.close()
    })
});
