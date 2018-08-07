
//calling the geolocation API through its object
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API for reference
navigator.geolocation.getCurrentPosition(userLocation) 


//our callback function for the geolocation API - it will not work without this and we cannot use
//latitude and longitude without them being inside of this!!!! this is important!!!! anything you want to use lat and long with need to
//be inside of this callback function!!!!!
function userLocation(position) {


    // declaring our empty objects to hold place names + the travel times as their properties, 
    // another object to hold place names + the estimated time spent, an array of the place names
    // also pulling the current date in so we can use the hours for our estimated time spent
    let placesTravelTime = {};
    let placesTimeSpent = {};
    let placeNames = Object.keys(placesTravelTime);
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);


    // this is highly important, this is what gets the user's current latitude and longitude using the geolocation API
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;


    // declaring our CORS anywhere proxy and our places API request
    const proxy = "https://cors-anywhere.herokuapp.com/"; 
    const placeURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&location=" + latitude + "," + longitude + "&radius=8000&keyword=quick,food,takeaway";


    // first AJAX call to our places API
    $.ajax({
        url : proxy + placeURL,
        method : "GET"
    
        // when the call is done, it executes this function which iterates over every response entry (a set of 20)
    }).done(function(response) {
        for (i = 0; i < 20; i++) {
            // setting some things to variables so we can use them easier: the initial drilldown into each response item
            // and the UNIQUE PLACE ID for each response item (this is used for the distance matrix query)
            let output = response.results[i];
            let responsePlaceID = output.place_id;
            // our distance matrix query url - we're using each response item's unique place ID to query the distance between the user's
            // current location and the location of the place
            let matrixURL = "https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&origins=" + latitude + "," + longitude + "&destinations=place_id:" + responsePlaceID;
            // if our object/names array doesnt already have an entry with that name (ie no duplicate places), we make another ajax call
            // to the distance matrix API
            if (placeNames.includes(output.name) === false) {
                $.ajax({
                    url : proxy + matrixURL,
                    method : "GET"
                }).done(function(resp) {
                    // when this call is complete, first we drill down into the response to get the travel time in minutes
                    // (the travel time is returned to us in seconds, so we have to do this)
                    console.log(resp);
                    let timeInMinutes = Math.round(resp.rows[0].elements[0].duration.value/60);
                    // this is where the travel time object is updated with the place's name and the travel time in minutes
                    placesTravelTime[output.name] = timeInMinutes;
                    // this series of if/else statements will look at the current hour and set the estimated time spent for each restaraunt 
                    // to a semi random number based on the time of day ie lunchtime is busiest
                    if (0 <= hours <= 11) {
                        let earlyTimeSpent = Math.floor(Math.random() * 15) + 9;
                        placesTimeSpent[output.name] = earlyTimeSpent;
                    } else if (12 <= hours <= 14) {
                        let lunchTimeSpent = Math.floor(Math.random() * 20) + 13;
                        placesTimeSpent[output.name] = lunchTimeSpent;
                    } else if (15 <= hours <= 20) {
                        let lateTimeSpent = Math.floor(Math.random() * 17) + 11;
                        placesTimeSpent[output.name] = lateTimeSpent;
                    } else {
                        let otherTimeSpent = Math.floor(Math.random() * 12) + 7;
                        placesTimeSpent[output.name] = otherTimeSpent;
                    }
                    console.log(placesTravelTime);
                    console.log(placesTimeSpent);
                })
            }    
        }
    })






}