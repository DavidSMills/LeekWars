
var request = require('request');
var config = require('../config');


function get_farmer_oponents(leek_id, callback) {
    var reqOptions = {
        method  : 'GET',
        url     : config.apiUrl + '/garden/get-farmer-opponents/' + token,
        jar     : config.cookieJar
    };

    request(
        reqOptions,
        function( error, response, body ) {
            if (error) {
              return console.error('Request failed:', error);
            }
            var data = JSON.parse( body );
            callback(data);
        }
    );
}


module.exports = get_farmer_oponents;
