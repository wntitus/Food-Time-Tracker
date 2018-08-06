$(document).ready(function() {

    //Global variables
    var userLatLong;
    var restaurantLocal;

    //Function to find user location and store the latitude and longitutde
    function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
    };
    function showPosition(position) {
        userLatLong = position.coords.latitude + "," + position.coords.longitude;
        console.log(userLatLong);
    };
    getLocation();

    // $(document).on("click", "#go", fucntion() {
    //     restaurantLocal = "temp"
    // });

    function initMap() {
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var userStart = new google.maps.LatLng(userLatLong);
        var mapOptions = {zoom:7, center:userLatLong};

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        directionsDisplay.setMap(map);
        directionDisplay.setPanel(document.getElementById('directions'));
    };

    function calcRoute() {
        var start = userLatLong;
        var end = "mcdonalds"
        var request = {
            origin: start,
            destination: end,
            travelMode: 'DRIVING'
        };
        directionsService.route(request, function(response, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(response);
            }
        });
    }
});

