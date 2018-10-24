const request = require('request');


request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAYcW5SelzQSlWvkuExn1tlHHSHsGK9BP0',
    json: true //tells request that the data coming back is json data, so request should convert the data into a JSON object for us
}, (error, response, body)=> {
    console.log(JSON.stringify(body, undefined, 2)); //Pretty Printing Objects
});
