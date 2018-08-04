$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(location) 
    

    function location(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        const proxy = "https://cors-anywhere.herokuapp.com/"; 
        const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&location="+latitude+","+longitude+"&rankby=distance&keyword=opennow";


        $.ajax({
            url : proxy + url,
            method : "GET"
        }).done(function(response) {
            console.log(response);
            console.log(latitude, longitude);
        })
    }

    
})





