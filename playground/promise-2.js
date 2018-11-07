const request = require('request');

var geocodeAddress = (address) => {

    return new Promise((resolve, reject) =>{


        var encodedAddress = encodeURI(address) //NOTE REMEMBER TO PASS IN ADDRESS ARGUMENT AS A STRING

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAYcW5SelzQSlWvkuExn1tlHHSHsGK9BP0`,
            json: true //tells request that the data coming back is json data, so request should convert the data into a JSON object for us
        }, (error, response, body) => {

            if(error){
                reject("Unable to connect to Google Server")
            }
            else if(body.status === "ZERO_RESULTS"){
                reject("Could not find given address.")

            }
            else if(body.status === "OK"){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        });

    })

};

geocodeAddress("22039").then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
