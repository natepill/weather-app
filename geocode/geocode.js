const request = require('request');



var geocodeAddress = (address, callback) => {

    var encodedAddress = encodeURI(address) //NOTE REMEMBER TO PASS IN ADDRESS ARGUMENT AS A STRING

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAYcW5SelzQSlWvkuExn1tlHHSHsGK9BP0`,
        json: true //tells request that the data coming back is json data, so request should convert the data into a JSON object for us
    }, (error, response, body) => {

        // console.log(JSON.stringify(response, undefined, 2)); //Pretty Printing Objects

        if(error){
            callback("Unable to connect to Google Server")
        }
        else if(body.status === "ZERO_RESULTS"){
            callback("Could not find given address.")

        }
        else if(body.status === "OK"){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })

        }
        //NOTE When using a new API it is important to test the request response in the browser or POSTMAN
        // with good and and bad requests (ie: inputting avaialable and unavailable addresses).
        // This allows us to see what we can work with in the body
    });


};




module.exports.geocodeAddress = geocodeAddress
