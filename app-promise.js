const yargs = require('yargs');
const axios = require('axios');


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

var encodedAddress = encodeURI(argv.address) //NOTE REMEMBER TO PASS IN ADDRESS ARGUMENT AS A STRING
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAYcW5SelzQSlWvkuExn1tlHHSHsGK9BP0`

axios.get(geocodeUrl).then((response) => {

    if (response.data.status === 'ZERO_RESULTS'){
        throw new Error("Unable to find that address");
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherUrl = `https://api.darksky.net/forecast/62899d832370e4b9db0067777303fcf1/${lat},${lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;

    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}!`)
}).catch((e) =>{

    if (e.code === 'ENOTFOUND'){
        console.log("Could not connect to API server")
    }else{
        console.log(e.message);
    }

});
