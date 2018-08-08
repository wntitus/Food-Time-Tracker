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


// ========= Navbar Animation =========//
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, options);
});

$(document).ready(function(){
	$('.sidenav').sidenav();
});
// ========= Navebar End ========//






//nesting everything inside userLocation function so we can utilize the lat and long of the user
function userLocation(position) {


	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;

	let placesTravelTime = {};
	let placesTimeSpent = {};

	let currentDate = new Date();
    let hours = currentDate.getHours();

	let proxy = "https://cors-anywhere.herokuapp.com/";
	let placesURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&location=" + latitude + "," + longitude + "&rankby=distance&keyword=quick,food,takeaway"

	$.ajax({
		url : proxy + placesURL,
		method : "GET"
	}).done(function(response) {
		console.log(response);

			let outputOne = response.results[0];
			let outputTwo = response.results[1];
			let outputThree = response.results[2];
			let outputFour = response.results[3];
			let outputFive = response.results[4];
			let outputOneID = outputOne.place_id;
			let outputTwoID = outputTwo.place_id;
			let outputThreeID = outputThree.place_id;
			let outputFourID = outputFour.place_id;
			let outputFiveID = outputFive.place_id;
			let matrixURLONE = "https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&origins=" + latitude + "," + longitude + "&destinations=place_id:" + outputOneID;
			let matrixURLTWO = "https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&origins=" + latitude + "," + longitude + "&destinations=place_id:" + outputTwoID;
			let matrixURLTHREE = "https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&origins=" + latitude + "," + longitude + "&destinations=place_id:" + outputThreeID;
			let matrixURLFOUR = "https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&origins=" + latitude + "," + longitude + "&destinations=place_id:" + outputFourID;
			let matrixURLFIVE = "https://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&origins=" + latitude + "," + longitude + "&destinations=place_id:" + outputFiveID;
			$.ajax({
				url : proxy + matrixURLONE,
				method : "GET"
			}).done(function(resp) {
				let timeInMinutes = Math.round(resp.rows[0].elements[0].duration.value/60);
				placesTravelTime[outputOne.name] = timeInMinutes;
				console.log(placesTravelTime);
				if (0 <= hours <= 11) {
					let earlyTimeSpent = Math.floor(Math.random() * 15) + 9;
					placesTimeSpent[outputOne.name] = earlyTimeSpent;
				} else if (12 <= hours <= 14) {
					let lunchTimeSpent = Math.floor(Math.random() * 20) + 13;
					placesTimeSpent[outputOne.name] = lunchTimeSpent;
				} else if (15 <= hours <= 20) {
					let lateTimeSpent = Math.floor(Math.random() * 17) + 11;
					placesTimeSpent[outputOne.name] = lateTimeSpent;
				} else {
					let otherTimeSpent = Math.floor(Math.random() * 12) + 7;
					placesTimeSpent[outputOne.name] = otherTimeSpent;
				}
				console.log(placesTimeSpent);
			}).done(function(){
				$.ajax({
					url : proxy + matrixURLTWO,
					method : "GET"
				}).done(function(resp) {
					let timeInMinutes = Math.round(resp.rows[0].elements[0].duration.value/60);
					placesTravelTime[outputTwo.name] = timeInMinutes;
					console.log(placesTravelTime);
					if (0 <= hours <= 11) {
						let earlyTimeSpent = Math.floor(Math.random() * 15) + 9;
						placesTimeSpent[outputTwo.name] = earlyTimeSpent;
					} else if (12 <= hours <= 14) {
						let lunchTimeSpent = Math.floor(Math.random() * 20) + 13;
						placesTimeSpent[outputTwo.name] = lunchTimeSpent;
					} else if (15 <= hours <= 20) {
						let lateTimeSpent = Math.floor(Math.random() * 17) + 11;
						placesTimeSpent[outputTwo.name] = lateTimeSpent;
					} else {
						let otherTimeSpent = Math.floor(Math.random() * 12) + 7;
						placesTimeSpent[outputTwo.name] = otherTimeSpent;
					}
					console.log(placesTimeSpent);
				}).done(function(){
					$.ajax({
						url : proxy + matrixURLTHREE,
						method : "GET"
					}).done(function(resp) {
						let timeInMinutes = Math.round(resp.rows[0].elements[0].duration.value/60);
						placesTravelTime[outputThree.name] = timeInMinutes;
						console.log(placesTravelTime);
						if (0 <= hours <= 11) {
							let earlyTimeSpent = Math.floor(Math.random() * 15) + 9;
							placesTimeSpent[outputThree.name] = earlyTimeSpent;
						} else if (12 <= hours <= 14) {
							let lunchTimeSpent = Math.floor(Math.random() * 20) + 13;
							placesTimeSpent[outputThree.name] = lunchTimeSpent;
						} else if (15 <= hours <= 20) {
							let lateTimeSpent = Math.floor(Math.random() * 17) + 11;
							placesTimeSpent[outputThree.name] = lateTimeSpent;
						} else {
							let otherTimeSpent = Math.floor(Math.random() * 12) + 7;
							placesTimeSpent[outputThree.name] = otherTimeSpent;
						}
						console.log(placesTimeSpent);
					}).done(function(){
						$.ajax({
							url : proxy + matrixURLFOUR,
							method : "GET"
						}).done(function(resp) {
							let timeInMinutes = Math.round(resp.rows[0].elements[0].duration.value/60);
							placesTravelTime[outputFour.name] = timeInMinutes;
							console.log(placesTravelTime);
							if (0 <= hours <= 11) {
								let earlyTimeSpent = Math.floor(Math.random() * 15) + 9;
								placesTimeSpent[outputFour.name] = earlyTimeSpent;
							} else if (12 <= hours <= 14) {
								let lunchTimeSpent = Math.floor(Math.random() * 20) + 13;
								placesTimeSpent[outputFour.name] = lunchTimeSpent;
							} else if (15 <= hours <= 20) {
								let lateTimeSpent = Math.floor(Math.random() * 17) + 11;
								placesTimeSpent[outputFour.name] = lateTimeSpent;
							} else {
								let otherTimeSpent = Math.floor(Math.random() * 12) + 7;
								placesTimeSpent[outputFour.name] = otherTimeSpent;
							}
							console.log(placesTimeSpent);
						}).done(function() {
							$.ajax({
								url : proxy + matrixURLFIVE,
								method : "GET"
							}).done(function(resp) {
								let timeInMinutes = Math.round(resp.rows[0].elements[0].duration.value/60);
								placesTravelTime[outputFive.name] = timeInMinutes;
								console.log(placesTravelTime);
								if (0 <= hours <= 11) {
									let earlyTimeSpent = Math.floor(Math.random() * 15) + 9;
									placesTimeSpent[outputFive.name] = earlyTimeSpent;
								} else if (12 <= hours <= 14) {
									let lunchTimeSpent = Math.floor(Math.random() * 20) + 13;
									placesTimeSpent[outputFive.name] = lunchTimeSpent;
								} else if (15 <= hours <= 20) {
									let lateTimeSpent = Math.floor(Math.random() * 17) + 11;
									placesTimeSpent[outputFive.name] = lateTimeSpent;
								} else {
									let otherTimeSpent = Math.floor(Math.random() * 12) + 7;
									placesTimeSpent[outputFive.name] = otherTimeSpent;
								}
								console.log(placesTimeSpent);
							}).done(function(){
								let namesArr = Object.keys(placesTravelTime);
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
								picDiv.html("<img class='responsive-img' src='https://images.unsplash.com/photo-1533323836708-9ed67edee77f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=172d2184a279215fe0aa10181ca012bb&auto=format&fit=crop&w=1700&q=80'>");
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
								nameDiv.addClass("col s9 m9");
								nameDiv.html("<h5 id='restaurant-input'>" + namesArr[0] + "</h5>");
									//'Lets Go' button
								var goDiv = $("<div>");
								goDiv.addClass("col s3 m3 right-align");
								var goImage = $("<a>");
								goImage.addClass("waves-effect waves-light btn");
								goImage.attr("id", "letsGo")
								goImage.attr("value", placesTravelTime[outputOne.name]);
								goImage.text("Go");
									//Row one is appending the Restaurant name and Go button
								rowOne.append(goImage);
								rowOne.append(nameDiv);
									//Row that has food type and address
								var rowTwo = $("<div>");
								rowTwo.addClass("row");
								var typeDiv = $("<div>");
								typeDiv.addClass("col s12");
								typeDiv.html("<h6>Type of Food: </h6>");
								var addressDiv = $("<div>");
								addressDiv.addClass("col s12");
								addressDiv.html("<h6>Address: </h6><hr>");
									//Append food type and address to the row
								rowTwo.append(typeDiv);
								rowTwo.append(addressDiv);
									//Row with distance, commute time, total time, and link to directions
								var rowThree = $("<div>");
								rowThree.attr("class", "row");
								//Distance to restaurant
								var distDiv = $("<div>");
								distDiv.addClass("col s4 m4 center-align");
								distDiv.attr("id", "distanc")
								distDiv.text("Distance: ");
								//Commute time to restaurant
								var commuteDiv = $("<div>");
								commuteDiv.addClass("col s4 m4 center-align");
								commuteDiv.attr("id", "commute_time");
								commuteDiv.text("Commute Time: " + placesTravelTime[outputOne.name]);
								//Total time to and in restaurant
								let totalTime = placesTravelTime[outputOne.name] + placesTimeSpent[outputOne.name];
								var totalDiv = $("<div>");
								totalDiv.addClass("col s4 m4 center-align");
								totalDiv.attr("id", "total_time");
								totalDiv.text("Total Time: ");
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
								picDiv.html("<img class='responsive-img' src='https://images.unsplash.com/photo-1533323836708-9ed67edee77f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=172d2184a279215fe0aa10181ca012bb&auto=format&fit=crop&w=1700&q=80'>");
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
								nameDiv.addClass("col s9 m9");
								nameDiv.html("<h5 id='restaurant-input'>" + namesArr[1] + "</h5>");
									//'Lets Go' button
								var goDiv = $("<div>");
								goDiv.addClass("col s3 m3 right-align");
								var goImage = $("<a>");
								goImage.addClass("waves-effect waves-light btn");
								goImage.attr("id", "letsGo")
								goImage.attr("value", placesTravelTime[outputTwo.name]);
								goImage.text("Go");
									//Row one is appending the Restaurant name and Go button
								rowOne.append(goImage);
								rowOne.append(nameDiv);
									//Row that has food type and address
								var rowTwo = $("<div>");
								rowTwo.addClass("row");
								var typeDiv = $("<div>");
								typeDiv.addClass("col s12");
								typeDiv.html("<h6>Type of Food: </h6>");
								var addressDiv = $("<div>");
								addressDiv.addClass("col s12");
								addressDiv.html("<h6>Address: </h6><hr>");
									//Append food type and address to the row
								rowTwo.append(typeDiv);
								rowTwo.append(addressDiv);
									//Row with distance, commute time, total time, and link to directions
								var rowThree = $("<div>");
								rowThree.attr("class", "row");
								//Distance to restaurant
								var distDiv = $("<div>");
								distDiv.addClass("col s4 m4 center-align");
								distDiv.attr("id", "distanc")
								distDiv.text("Distance: ");
								//Commute time to restaurant
								var commuteDiv = $("<div>");
								commuteDiv.addClass("col s4 m4 center-align");
								commuteDiv.attr("id", "commute_time");
								commuteDiv.text("Commute Time: " + placesTravelTime[outputTwo.name]);
								//Total time to and in restaurant
								totalTime = placesTravelTime[outputTwo.name] + placesTimeSpent[outputTwo.name];
								var totalDiv = $("<div>");
								totalDiv.addClass("col s4 m4 center-align");
								totalDiv.attr("id", "total_time");
								totalDiv.text("Total Time: ");
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
								picDiv.html("<img class='responsive-img' src='https://images.unsplash.com/photo-1533323836708-9ed67edee77f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=172d2184a279215fe0aa10181ca012bb&auto=format&fit=crop&w=1700&q=80'>");
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
								nameDiv.addClass("col s9 m9");
								nameDiv.html("<h5 id='restaurant-input'>" + namesArr[2] + "</h5>");
									//'Lets Go' button
								var goDiv = $("<div>");
								goDiv.addClass("col s3 m3 right-align");
								var goImage = $("<a>");
								goImage.addClass("waves-effect waves-light btn");
								goImage.attr("id", "letsGo")
								goImage.attr("value", placesTravelTime[outputThree.name]);
								goImage.text("Go");
									//Row one is appending the Restaurant name and Go button
								rowOne.append(goImage);
								rowOne.append(nameDiv);
									//Row that has food type and address
								var rowTwo = $("<div>");
								rowTwo.addClass("row");
								var typeDiv = $("<div>");
								typeDiv.addClass("col s12");
								typeDiv.html("<h6>Type of Food: </h6>");
								var addressDiv = $("<div>");
								addressDiv.addClass("col s12");
								addressDiv.html("<h6>Address: </h6><hr>");
									//Append food type and address to the row
								rowTwo.append(typeDiv);
								rowTwo.append(addressDiv);
									//Row with distance, commute time, total time, and link to directions
								var rowThree = $("<div>");
								rowThree.attr("class", "row");
								//Distance to restaurant
								var distDiv = $("<div>");
								distDiv.addClass("col s4 m4 center-align");
								distDiv.attr("id", "distanc")
								distDiv.text("Distance: ");
								//Commute time to restaurant
								var commuteDiv = $("<div>");
								commuteDiv.addClass("col s4 m4 center-align");
								commuteDiv.attr("id", "commute_time");
								commuteDiv.text("Commute Time: " + placesTravelTime[outputThree.name]);
								//Total time to and in restaurant
								totalTime = placesTravelTime[outputThree.name] + placesTimeSpent[outputThree.name];
								var totalDiv = $("<div>");
								totalDiv.addClass("col s4 m4 center-align");
								totalDiv.attr("id", "total_time");
								totalDiv.text("Total Time: ");
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
								picDiv.html("<img class='responsive-img' src='https://images.unsplash.com/photo-1533323836708-9ed67edee77f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=172d2184a279215fe0aa10181ca012bb&auto=format&fit=crop&w=1700&q=80'>");
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
								nameDiv.addClass("col s9 m9");
								nameDiv.html("<h5 id='restaurant-input'>" + namesArr[3] + "</h5>");
									//'Lets Go' button
								var goDiv = $("<div>");
								goDiv.addClass("col s3 m3 right-align");
								var goImage = $("<a>");
								goImage.addClass("waves-effect waves-light btn");
								goImage.attr("id", "letsGo")
								goImage.attr("value", placesTravelTime[outputFour.name]);
								goImage.text("Go");
									//Row one is appending the Restaurant name and Go button
								rowOne.append(goImage);
								rowOne.append(nameDiv);
									//Row that has food type and address
								var rowTwo = $("<div>");
								rowTwo.addClass("row");
								var typeDiv = $("<div>");
								typeDiv.addClass("col s12");
								typeDiv.html("<h6>Type of Food: </h6>");
								var addressDiv = $("<div>");
								addressDiv.addClass("col s12");
								addressDiv.html("<h6>Address: </h6><hr>");
									//Append food type and address to the row
								rowTwo.append(typeDiv);
								rowTwo.append(addressDiv);
									//Row with distance, commute time, total time, and link to directions
								var rowThree = $("<div>");
								rowThree.attr("class", "row");
								//Distance to restaurant
								var distDiv = $("<div>");
								distDiv.addClass("col s4 m4 center-align");
								distDiv.attr("id", "distanc")
								distDiv.text("Distance: ");
								//Commute time to restaurant
								var commuteDiv = $("<div>");
								commuteDiv.addClass("col s4 m4 center-align");
								commuteDiv.attr("id", "commute_time");
								commuteDiv.text("Commute Time: " + placesTravelTime[outputFour.name]);
								//Total time to and in restaurant
								totalTime = placesTravelTime[outputFour.name] + placesTimeSpent[outputFour.name];
								var totalDiv = $("<div>");
								totalDiv.addClass("col s4 m4 center-align");
								totalDiv.attr("id", "total_time");
								totalDiv.text("Total Time: " + totalTime);
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
								picDiv.html("<img class='responsive-img' src='https://images.unsplash.com/photo-1533323836708-9ed67edee77f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=172d2184a279215fe0aa10181ca012bb&auto=format&fit=crop&w=1700&q=80'>");
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
								nameDiv.addClass("col s9 m9");
								nameDiv.html("<h5 id='restaurant-input'>" + namesArr[4] + "</h5>");
									//'Lets Go' button
								var goDiv = $("<div>");
								goDiv.addClass("col s3 m3 right-align");
								var goImage = $("<a>");
								goImage.addClass("waves-effect waves-light btn");
								goImage.attr("id", "letsGo")
								goImage.attr("value", placesTravelTime[outputFive.name]);
								goImage.text("Go");
									//Row one is appending the Restaurant name and Go button
								rowOne.append(goImage);
								rowOne.append(nameDiv);
									//Row that has food type and address
								var rowTwo = $("<div>");
								rowTwo.addClass("row");
								var typeDiv = $("<div>");
								typeDiv.addClass("col s12");
								typeDiv.html("<h6>Type of Food: </h6>");
								var addressDiv = $("<div>");
								addressDiv.addClass("col s12");
								addressDiv.html("<h6>Address: </h6><hr>");
									//Append food type and address to the row
								rowTwo.append(typeDiv);
								rowTwo.append(addressDiv);
									//Row with distance, commute time, total time, and link to directions
								var rowThree = $("<div>");
								rowThree.attr("class", "row");
								//Distance to restaurant
								var distDiv = $("<div>");
								distDiv.addClass("col s4 m4 center-align");
								distDiv.attr("id", "distanc")
								distDiv.text("Distance: ");
								//Commute time to restaurant
								var commuteDiv = $("<div>");
								commuteDiv.addClass("col s4 m4 center-align");
								commuteDiv.attr("id", "commute_time");
								commuteDiv.text("Commute Time: " + placesTravelTime[outputFive.name]);
								//Total time to and in restaurant
								totalTime = placesTravelTime[outputFive.name] + placesTimeSpent[outputFive.name];
								var totalDiv = $("<div>");
								totalDiv.addClass("col s4 m4 center-align");
								totalDiv.attr("id", "total_time");
								totalDiv.text("Total Time: " + totalTime);
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
							})
						})
					})
				})
			})

			
			
		
		
		
		


	})




	








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
	$(document).ready(function(){
		$("#Arrived").hide();
		$("#Ordered").hide();
		$("#Pickedup").hide();
		$("#Startingmeal").hide();
		$("#Finishedmeal").hide();
		$("#Onrouteback").hide();
		$("#Arrived2").hide();
		$("#lap").click(function(){
			$("#lap").hide();
			$("#Arrived").show();
		});
		$("#Arrived").click(function(){
			laps.innerHTML +="<li>" + mins.innerHTML +":"+ secs.innerHTML +":"+ cents.innerHTML + "</li>";
			$("#Arrived").hide();
			$("#Ordered").show();
		});
		$("#Ordered").click(function(){
			laps.innerHTML +="<li>" + mins.innerHTML +":"+ secs.innerHTML +":"+ cents.innerHTML + "</li>";
			$("#Ordered").hide();
			$("#Pickedup").show();
		});
		$("#Pickedup").click(function(){
			laps.innerHTML +="<li>" + mins.innerHTML +":"+ secs.innerHTML +":"+ cents.innerHTML + "</li>";
			$("#Pickedup").hide();
			$("#Startingmeal").show();
		});
		$("#Startingmeal").click(function(){
			laps.innerHTML +="<li>" + mins.innerHTML +":"+ secs.innerHTML +":"+ cents.innerHTML + "</li>";
			$("#Startingmeal").hide();
			$("#Finishedmeal").show();
		});
		$("#Finishedmeal").click(function(){
			laps.innerHTML +="<li>" + mins.innerHTML +":"+ secs.innerHTML +":"+ cents.innerHTML + "</li>";
			$("#Finishedmeal").hide();
			$("#Onrouteback").show();
		});
		$("#Onrouteback").click(function(){
			laps.innerHTML +="<li>" + mins.innerHTML +":"+ secs.innerHTML +":"+ cents.innerHTML + "</li>";
			$("#Onrouteback").hide();
			$("#Arrived2").show();
		});
		$("#Arrived2").click(function(){
			laps.innerHTML +="<li>" + mins.innerHTML +":"+ secs.innerHTML +":"+ cents.innerHTML + "</li>";
		});

		
	});

	// modal below

	var modal=document.getElementById('#lapmodal');
	var btn=document.getElementById('#Arrived2');
	var span =document.getElementsByClassName("close")[0];

	btn.onclick=function(){
		modal.style.display="block";
	}
	span.onclick=function(){
		modal.style.display="none";
	}
	window.onclick=function(event){
		if(event.target == modal){
			modal.style.display="none";
		}
	}

});

//========= function for Go button ======
//Variable to hold the value of the Go button
var chosenRestaurant;

//set chosen restaurant to be equal to the value of the go button that is pressed
$(document).on("click", "#letsGo", function() {
	chosenRestaurant = $(this).attr("value");
	console.log(chosenRestaurant);
})

//JS for the map and directions
//Global variables
var userLatLong;
var lat;
var long;
var restaurantLocal = "mcdonalds"

//Function to find user location
function getLocation() {
	navigator.geolocation.getCurrentPosition(showPosition);
};
getLocation();
//Store the user location
function showPosition(position) {
	userLatLong = position.coords.latitude + ", " + position.coords.longitude;
	lat = position.coords.latitude;
	long = position.coords.longitude;
	// console.log(userLatLong);
	console.log("lat: " + lat + " and Long: " + long);

	//Initialize the map on the directions page
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

	//Calculate the route from the user to the restaurant
	function calcRoute(directionsService, directionsDisplay) {
		var start = new google.maps.LatLng(lat, long);
		var end = chosenRestaurant;
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
	}

	//Call the function to initialize the map and directions
	initMap ();
	//Call the function to get the user's location
	// getLocation ();

}
}

  
//Function to find location and display map of the local area
// function getLocation() {
// 	navigator.geolocation.getCurrentPosition(showPosition);
// }
// function showPosition(position) {
// 	latlong = position.coords.latitude + "," + position.coords.longitude;

// 	var url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlong + "&zoom=14&size=400x300&sensor=false&key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8";

// 	$("#map").html("<img src='" + url + "'>");
// 	$("#map").prepend(url);
// 	// alert(latlong);
// }
// getLocation();



//User can add a restaurant to their favorites list
// $(document).on("click", "#favorite", function() {
// 	alert("Click works");


});