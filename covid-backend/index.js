var express = require('express');
var app = express();
var fs = require("fs");
var cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/report', function (req, res) {

    let query = req.query.queryStr;
    let url = `https://api.rxivist.org/v1/papers?metric=downloads&timeframe=alltime`;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
