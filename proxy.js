var proxy = require('express-http-proxy');
var express = require('express');

var app = express();

// Return long-cached, super-small snippet as a replacement for our current one-line snippet
// This isn't strictly necessary (and comes with an additional http request), but would allow us to keep our current snippet implementation

app.get('/js/[0-9]+\.js', function(req, res) {

    fs = require('fs')
    fs.readFile('public/snippet.min.js', 'utf8', function(err, data) {

        if (err) {
            return console.log(err);
        }

        res.send(data.replace("{{snippet_url}}", "//" + req.hostname + "" + req.originalUrl.replace('/js/', '/js/original/')));

    });

});

// Proxy the original snippet through
// All we do here is add the CORS header since we didn't put it on our actual snippet yet

app.use('/js/original/*', proxy('http://cdn.optimizely.com', {
    forwardPath: function(req, res) {
        return req.baseUrl.replace('original/', '');
    },
    intercept: function(rsp, data, req, res, callback) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        callback(null, data);
    },
    decorateRequest: function(req) {
        return req;
    }
}));

var server = app.listen(80, function() {

    var host = server.address().address;
    var port = server.address().port;

});