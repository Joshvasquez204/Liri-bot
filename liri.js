var searchType = process.argv[2];
var argumentString = process.argv.slice(3).join('+');

// adding logging
const fs = require('fs');
const moment = require('moment');
var now = moment().format('MMMM Do YYYY, h:mm:ss a');

var music = require('./music');
var movies = require('./movies');
var bands = require('./bands');



fs.appendFile('server.log', '\n' + now + ' Search Type: ' + searchType + '; Search value: ' + argumentString, function (err) {
    
});

if (searchType === 'spotify-this-song') {
    console.log(music.GetTrack(argumentString));
} else if (searchType === 'concert-this') {
    console.log(bands.GetBands(argumentString));
}  else if (searchType === 'movie-this') {
    console.log(movies.GetFlick(argumentString))
}

