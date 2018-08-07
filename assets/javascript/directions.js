$(document).ready(function() {

    //Global variables
    var userLatLong;
    var lat;
    var long;
    var restaurantLocal = "mcdonalds"

    //Function to find user location and store the latitude and longitutde
    function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
    };
    function showPosition(position) {
        userLatLong = position.coords.latitude + "," + position.coords.longitude;
        lat = position.coords.latitude;
        long = position.coords.longitude;
        // console.log(userLatLong);
        console.log("lat: " + lat + " and Long: " + long);

        // function initMap(){
        //     var mapOption = {
        //         center: new google.maps.LatLng(lat, long), 
        //         zoom: 15
        //     };
        //     var map = new google.maps.Map(document.getElementById('map'), mapOption);
        // };
        // initMap ();

        function initMap() {
            var directionsDisplay = new google.maps.DirectionsRenderer();
            var directionsService = new google.maps.DirectionsService();

            var userLocal = new google.maps.LatLng(lat, long);
            var mapOptions = {
              zoom:15,
              center: userLocal
            }
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            directionsDisplay.setMap(map);
            directionsDisplay.setPanel(document.getElementById('directions'));

            calcRoute(directionsService, directionsDisplay);
          
        }
        function calcRoute(directionsService, directionsDisplay) {
            var start = new google.maps.LatLng(lat, long);
            var end = "pho88";
            directionsService.route({
                origin: start,
                destination: end,
                travelMode: 'DRIVING'
              }, function(response, status) {
                if (status === 'OK') {
                  directionsDisplay.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
              });

            // var request = {
            //   origin:start,
            //   destination:end,
            //   travelMode: 'DRIVING'
            // };
            // directionsService.route(request, function(response, status) {
            //   if (status == 'OK') {
            //     directionsDisplay.setDirections(response);
            //   }
            // });

        };
    
    initMap ();
    // calcRoute();
    }
    getLocation ();

    // console.log("lat: " + lat + "and Long: " + long);
    // var mapurl = "https://maps.googleapis.com/maps/api/staticmap?center=" + userLatLong +"&zoom=14&size=400x300&key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8";
    // $("#map").html("<img src='" + mapurl + "'>");

    // function initMap(){
    //     var mapOption = {
    //         center: new google.maps.LatLng(userLatLong), 
    //         zoom: 10
    //     };
    //     var map = new google.maps.Map(document.getElementById('map'), mapOption);
    // };

    // initMap ();

    

    // $(document).on("click", "#go", fucntion() {
    //     restaurantLocal = "temp"
    // });

    // function initMap() {
    //     var directionsService = new google.maps.DirectionsService();
    //     var directionsDisplay = new google.maps.DirectionsRenderer();
    //     var userStart = new google.maps.LatLng(userLatLong);
    //     var mapOptions = {zoom:7, center:userLatLong};

    //     var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //     directionsDisplay.setMap(map);
    //     directionDisplay.setPanel(document.getElementById('directions'));
    // };

    // function calcRoute() {
    //     var start = userLatLong;
    //     var end = "mcdonalds"
    //     var request = {
    //         origin: start,
    //         destination: end,
    //         travelMode: 'DRIVING'
    //     };
    //     directionsService.route(request, function(response, status) {
    //         if (status == 'OK') {
    //             directionsDisplay.setDirections(response);
    //         }
    //     });
    // }
});

