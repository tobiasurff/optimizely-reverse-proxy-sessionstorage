
var proxy = require('express-http-proxy');
var express = require('express');

var app = express();

app.get('/js/*', function (req, res) {
  console.log(req.originalUrl);
  res.send("huhu");
});
/*
app.use('/js/original/*', proxy('http://cdn.optimizely.com', {
    forwardPath: function(req, res) {
        return req.baseUrl;
    },
    intercept: function(rsp, data, req, res, callback) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        //data = data.toString('utf8').replace(/optimizely/g, 'toby');
        callback(null, data);
    },
    decorateRequest: function(req) {
        //req.headers['Accept-Encoding'] = 'utf8';
        return req;
    }
}));*/

var server = app.listen(80, function() {

    var host = server.address().address;
    var port = server.address().port;

});