$(document).ready(function(){

// })
// loads the geolocation method for the userLocation callback function
navigator.geolocation.getCurrentPosition(userLocation) 



document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
	.delay(1700)
	.fadeOut();
});


//nesting everything inside userLocation function so we can utilize the lat and long of the user
function userLocation(position) {
	let placesTravelTime = {};
    let placesTimeSpent = {};
    let placeNames = Object.keys(placesTravelTime);
	let currentDate = new Date();
	let namesArr = [];
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);
	// setting current lat and long to user position
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	//setting our cors proxy and our places API url that uses the user lat and long 
	const proxy = "https://cors-anywhere.herokuapp.com/"; 
    const placeURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&location=" + latitude + "," + longitude + "&rankby=distance&keyword=quick,food,takeaway";



//Test pushing objects and sorting


//Make an array to hold the restaurant names
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
					method : "GET",

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
                
					namesArr = Object.keys(placesTravelTime);

					
					//Function call with display5ToPage();
					console.log(namesArr);

					//Find the fastest time and store it in an array with the restaurant name next to it.
					//We want to do this 5 times and after each time remove the fastest
					//Find and store the 5 fastest restaurants to an array
					//Find the fastest time 


					// ========= Navbar Animation =========//
					document.addEventListener('DOMContentLoaded', function() {
						var elems = document.querySelectorAll('.sidenav');
						var instances = M.Sidenav.init(elems, options);
					});

					$(document).ready(function(){
						$('.sidenav').sidenav();
					});
					// ========= Navebar End ========//




					// ========= Dynamic Restaurant Generation =========== //
						//Populate the website with the fastest restaurants
						//Makes a card with the restaurant info
						var newCard = $("<div>");
						newCard.addClass("card horizontal");

						//A single row that contains all of card information (The one row to rule them all)
						var rowAll = $("<div>");
						rowAll.addClass("row");

						//Restaurant image
						var rowPic = $("<div>");
						var picDiv = $("<div>");
						picDiv.addClass("col s12 m4");
						picDiv.attr("id", "restaurant_img");
						picDiv.attr("sytle", "padding:0px;");
						picDiv.html("<img class='responsive-img' src='" + response.image + "'>");
						
						//Append picture to the card
						picDiv.append(picDiv);

						//Column of inputs (Restaurant name, cusine, times, etc...)
						var rightCol = $("<div>");
						rightCol.addClass("col s12 m8 rightCol");

						//Row with Restaurant name and favorite icon
						var rowOne = $("<div>");
						rowOne.addClass("row");
						
						//Restaurant Name
						var nameDiv = $("<div>");
						nameDiv.addClass("col s8 m8");
						nameDiv.html("<h5 id='restaurant-input'>" + output.name + "</h5>");
						
						//Favorite icon
						var favDiv = $("<div>");
						favDiv.addClass("col s2 m2 right-align");
						favDiv.attr("id", "favorite");
						var heart = $("<i>");
						heart.addClass("small material-icons");
						heart.text("favorite_border");

						favDiv.append(heart);
						//Append the name and heart icon to the row
						rowOne.append(nameDiv);
						rowOne.append(favDiv);

						//'Lets Go' button
						var goDiv = $("<div>");
						goDiv.addClass("col s3 m3 right-align");
						goDiv.attr("id", "goBtn")
						goDiv.attr("value", output.address);
						var goImage = $("<a>");
						goImage.addClass("waves-effect waves-light btn");
						goImage.text("Go");
						rowOne.append(goImage);

						//Row that has food type and address
						var rowTwo = $("<div>");
						rowTwo.addClass("row");
						var typeDiv = $("<div>");
						typeDiv.addClass("col s12");
						typeDiv.html("<h6>Type of Food:" + output.type +  "</h6>");
						var addressDiv = $("<div>");
						addressDiv.addClass("col s12");
						addressDiv.html("<h6>Address: " + output.address + "</h6><hr>");


						//Append food type and address to the row
						rowTwo.append(typeDiv);
						rowTwo.append(addressDiv);
						

						//Row with distance, commute time, total time, and link to directions
						var rowThree = $("<div>");
						rowThree.attr("class", "row");
						//Distance to restaurant
						var distDiv = $("<div>");
						distDiv.addClass("col s4 m2 center-align");
						distDiv.attr("id", "distance")
						distDiv.text("Distance: " + output.distance);
						//Commute time to restaurant
						var commuteDiv = $("<div>");
						commuteDiv.addClass("col s4 m2 center-align");
						commuteDiv.attr("id", "commute_time");
						commuteDiv.text("Commute Time: " + placesTravelTime[output.name]);
						//Total time to and in restaurant
						var totalDiv = $("<div>");
						totalDiv.addClass("col s4 m2 center-align");
						totalDiv.attr("id", "total_time");
						totalDiv.text("Total Time: " + placesTimeSpent[output.name]);

						//Append distance, commute time, total est time, and directions button to the thrird row
						rowThree.append(distDiv);
						rowThree.append(commuteDiv);
						rowThree.append(totalDiv);
						rowThree.append(goDiv);


						//Append all of the Restaurant inputs to a column 
						rightCol.append(rowOne);
						rightCol.append(rowTwo);
						rightCol.append(rowThree);

						//Appending image and input column together to card
						rowAll.append(picDiv);
						rowAll.append(rightCol);

						//Attach the master row to the card
						newCard.append(rowAll);
						
						$("#cards").append(newCard);

						//Remove the fastest restaurant so it doesn't show up again
						// namesArr.splice(fastestIndex, 1);
						// totalTimeArr.splice(fastestIndex, 1);
						// console.log(namesArr);
						// console.log(totalTimeArr);

					
					

					// ========= Dyn Gen End =========//


					// ========= Favorite Heart Click ========== //
					$("#favorite").click(function () {
						$("#favorite").html('<i class="small material-icons">favorite</i>');

						// if clicked again it reverts back to the old state 



						//Add a function here to append the whole card to the favorites page. Whooooohooo

					})





					// ========= End Favorite Heart Click 


					// ========= Logic for Timer =========== //

					// class var for stopwatch
					var ss=document.getElementsByClassName('stopwatch');
					// function for when variables are called
					[].forEach.call(ss, function (s){
						var currentTimer=0;
						interval=0;
						lastupdatetime=new Date().getTime(),
						start= s.querySelector('button.start');
						stop= s.querySelector('button.stop');
						reset= s.querySelector('button.reset');
						save= s.querySelector('button.save')
						mins= s.querySelector('span.minutes');
						secs=s.querySelector('span.seconds');
						cents=s.querySelector('span.centiseconds');

						start.addEventListener('click',startTimer);
						stop.addEventListener('click',stopTimer);
						reset.addEventListener('click',resetTimer);


						function pad (n){
							return('00' + n).substr(-2);
						}
						//function that updates the innerHTML to the current time
						function update(){
							var now = new Date().getTime(),
							dt= now - lastupdatetime;

							currentTimer += dt;

							var time = new Date(currentTimer);

							mins.innerHTML=pad(time.getMinutes());
							secs.innerHTML=pad(time.getSeconds());
							cents.innerHTML=pad(Math.floor(time.getMilliseconds()/ 10));

							lastupdatetime=now;
						}
						// functions that start and stop timer
						function startTimer () {
							if (!interval) {
								lastupdatetime= new Date().getTime();
								interval=setInterval(update,1);
							}
							
						};
						function stopTimer(){
							clearInterval(interval);
							interval=0;

						}
						function resetTimer(){
							stopTimer();

							currentTimer=0;

							mins.innerHTML=secs.innerHTML=cents.innerHTML=pad(0);
						}
						var lap= document.getElementById('lap');
						var laps=document.getElementById('laps');
						
						lap.onclick=function(){
							laps.innerHTML +="<li>" + mins.innerHTML +":"+ secs.innerHTML +":"+ cents.innerHTML + "</li>";
						}
						
					});


					
				})
            }    
        }
    })




}
})

