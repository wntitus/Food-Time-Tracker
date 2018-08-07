

navigator.geolocation.getCurrentPosition(userLocation) 

function userLocation(position) {

    let placesTravelTime = {};
    let placesTimeSpent = {};
    let placeNames = Object.keys(placesTravelTime);
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    const proxy = "https://cors-anywhere.herokuapp.com/"; 
    const placeURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&location=" + latitude + "," + longitude + "&radius=8000&keyword=quick,food,takeaway";


    $.ajax({
        url : proxy + placeURL,
        method : "GET"
    }).done(function(response) {
        for (i = 0; i < 20; i++) {
            let output = response.results[i];
            let responsePlaceID = output.place_id;
            let matrixURL = "https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&origins=" + latitude + "," + longitude + "&destinations=place_id:" + responsePlaceID;
            if (placeNames.includes(output.name) === false) {
                $.ajax({
                    url : proxy + matrixURL,
                    method : "GET"
                }).done(function(resp) {
                    console.log(resp);
                    let timeInMinutes = Math.round(resp.rows[0].elements[0].duration.value/60);
                    placesTravelTime[output.name] = timeInMinutes;
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