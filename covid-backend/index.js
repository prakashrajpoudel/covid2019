'use strict';
const axios = require('axios');
module.exports.endpoint = (event, context, callback) => {
    let url = `https://api.rxivist.org/v1/papers?metric=downloads&timeframe=alltime`;
    axios({
        method:'get',
        url
    })
    .then(function (res) {
       const response = {
         statusCode: 200,
         headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
         },
         body: JSON.stringify(res.data)
       };
       callback(null, response);
    })
    .catch(function (error) {
        console.log(error);
        callback(error);
    });
};

