/**
 * This is an example of a basic node.js script that performs
 * the Implicit Grant oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow
 */

var express = require('express'); // Express web server framework
var app = express();
app.use(express.static(__dirname + '/public'));
console.log('Listening on 8887');
app.listen(8887);
var request = require('request');

var headers = {
    'Authorization': 'Bearer+access_token'
};
var options = {
    url: 'https://api.spotify.com/v1/users/me/playlists',
    headers: headers
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        var url='https://api.spotify.com/v1/users/me/playlists';

    }
    return document.getElementById('list').setAttribute('src', url);
}

request(options, callback);
