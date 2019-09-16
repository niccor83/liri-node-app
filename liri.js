require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var search = process.argv[3];
var concert;
var movie;

if(command === "concert-this"){
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp")
        .then(function (response) {
            concert = response.data;
            console.log("Venue Name: " + concert[0].venue.name);
            console.log("Location: " + concert[0].venue.city + ", " + response.data[0].venue.country);
            console.log("Date: " + concert[0].datetime);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
} 
if(command === "spotify-this-song"){
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp")
        .then(function (response) {
            concert = response.data;
            console.log("Venue Name: " + concert[0].venue.name);
            console.log("Location: " + concert[0].venue.city + ", " + response.data[0].venue.country);
            console.log("Date: " + concert[0].datetime);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

if(command === "movie-this"){
    axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            movie = response.data;
            // console.log(movie);
            console.log("Title: " + movie.Title);
            console.log("Year: " + movie.Year);
            console.log("IMDB Rating: " + movie.imdbRating);
            console.log("Rotten Tomates Rating: " + movie.Ratings[1].Value);
            console.log("Country: " + movie.Country);
            console.log("Language: " + movie.Language);
            console.log("Plot: " + movie.Plot);
            console.log("Actors: " + movie.Actors);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}



