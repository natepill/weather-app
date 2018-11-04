const yargs = require('yargs');
const request = require('request');
// const mongoose = require('mongoose');
// require('./data/weather-db');

const geocode = require('./geocode/geocode')

// const House = require('./models/house')
//
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));


// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes'); ???
//
// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     }else{
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// });
//
// request({
//     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAYcW5SelzQSlWvkuExn1tlHHSHsGK9BP0`,
//     json: true //tells request that the data coming back is json data, so request should convert the data into a JSON object for us
// }

request({
    url: 'https://api.darksky.net/forecast/62899d832370e4b9db0067777303fcf1/32,42',
    json: true

}, (error, response, body) => {

    if(error){
        console.log('Cannot connect to forecast.io servers')
    }
    else if(!error && response.statusCode === 200){
        console.log(body.currently.temperature);
    }else{
        console.log('Could not fetch the weather data')
    }

});


// API key 62899d832370e4b9db0067777303fcf1
