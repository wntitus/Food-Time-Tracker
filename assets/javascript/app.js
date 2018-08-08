$(document).ready(function(){

// })
// loads the geolocation method for the userLocation callback function
navigator.geolocation.getCurrentPosition(userLocation) 






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

							})
						})
					})
				})
			})


			
		
		
		
		

	})




	





}
})

