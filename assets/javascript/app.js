
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
var places = {
    mcdonalds: 15,
	habibi: 20,
	chipotle: 15,
	lazymoon: 35,
	elcerro: 35,
	burgerfi: 15,
	tijuanaflats: 20 
};

var maps = {
    mcdonalds: 10,
    habibi: 7,
	lazymoon: 3,
	tijuanaflats: 4,
	burgerfi: 8,
	elcerro: 3,
	chipotle: 4
};
console.log(places);
console.log(maps);

//Make an array to hold the restaurant names
var namesArr = Object.keys(places);
console.log(namesArr);

//Make an array to hold the total time
var totalTimeArr = [];
for(i = 0; i < namesArr.length; i++) {
	console.log(i);
	var restName = namesArr[i];
	console.log(restName);
	console.log(maps);
	//Store the drive time to a variable
	var drive = maps[restName];
	console.log(drive);
	//Store the average time people spend in the restaurant in a variable
	var eatTime = places[restName];
	//Add the drive time and time spent in restaurant
	totalTime = drive + eatTime;
	//Push the total time into an array so that the index will be aligned with the names array
	totalTimeArr.push(totalTime);
	console.log(totalTime);
}
console.log(totalTimeArr);

var topFive = [];

//Find the fastest time and store it in an array with the restaurant name next to it.
//We want to do this 5 times and after each time remove the fastest
for (j = 0; j < 5; j++) {
	//Find the fastest restaurant time
	var fastest = Math.min.apply(Math, totalTimeArr);
	console.log(fastest);
	//Use the index of the fastest time to find which restaurant it is
	var fastestIndex = totalTimeArr.indexOf(fastest);
	console.log(namesArr[fastestIndex] + " will only take " + totalTimeArr[fastestIndex] + " minutes.");
	//Push the restaurant and total time to top five array
	topFive.push(namesArr[fastestIndex]);
	topFive.push(totalTimeArr[fastestIndex]);
	console.log(topFive);
	//Remove the fastest restaurant so it doesn't show up again
	namesArr.splice(fastestIndex, 1);
	totalTimeArr.splice(fastestIndex, 1);
	console.log(namesArr);
	console.log(totalTimeArr);
}
//Find and store the 5 fastest restaurants to an array
//Find the fastest time 




// logic for timer ----->

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
	
	foodarray=["Arrived!","Ordered Food!","Order Picked Up!","Starting Meal!","Finished Meal","On Route!","Arrived!"]
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

	


	
});
