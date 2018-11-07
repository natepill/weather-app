const yargs = require('yargs');
// const mongoose = require('mongoose');
// require('./data/weather-db');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

// const House = require('./models/house')
//
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));


// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes'); ???
//
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        // console.log(JSON.stringify(results, undefined, 2))
        console.log(results.address)

        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage)
            }else{
                // console.log(JSON.stringify(weatherResults, undefined, 2))
                console.log(`It is currently ${weatherResults.temperature} with a humidity of ${weatherResults.humidity}`)
            }
        });

        //By chaining the weather callback into the the geocode callback we are able to
        // utilize the latitude and longitude of the the house that we specify in our
        // terminal argv




    }
});
