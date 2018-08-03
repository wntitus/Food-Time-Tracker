
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});


// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyA_Trd-05zcJMwzm5Utn20_fMJUrHRrFo4",
//     authDomain: "foodranger-ce610.firebaseapp.com",
//     databaseURL: "https://foodranger-ce610.firebaseio.com",
//     projectId: "foodranger-ce610",
//     storageBucket: "foodranger-ce610.appspot.com",
//     messagingSenderId: "472127333488"
// };
// firebase.initializeApp(config);

// //Database to refrence firebase
// var database = firebase.database();

//Variables to find fastest restaurant


//Firebase will be used to store past selections and user times(if time allows for timer to be added)


//Test pushing objects and sorting
var places = [
    {mcdonalds: 15},
    {habibi: 20},
    {lazymoon: 35}
];

var maps = [
    {mconalds: 10},
    {habibi: 7},
    {lazymoon: 3}
];
console.log(places);
console.log(maps);

// ============= MAP ==============
// Initialize and add the map

var latitude; 
var longitude; 

function initMap() {

    navigator.geolocation.getCurrentPosition(location) 
    

    function location(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }
    var centered = {lat:latitude, lng:longitude};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: centered});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position.});

}