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

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     }else{
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// });


weather.getWeather(32, 42, (errorMessage, weatherResults) => {
    if(errorMessage){
        console.log(errorMessage)
    }else{
        console.log(JSON.stringify(weatherResults, undefined, 2))
    }

});
