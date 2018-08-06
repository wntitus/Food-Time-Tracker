function weighter(){
    navigator.geolocation.getCurrentPosition(location) 
    
    let namesArray = [];
    let typesArray = [];
    let junk = [];
    let idArray = [];

    function location(position) {
        let itemWeight = 0;
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        const proxy = "https://cors-anywhere.herokuapp.com/"; 
        const placeURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&location=" + latitude + "," + longitude + "&radius=8000&keyword=quick,food,takeaway";
       
        
        $.ajax({
            url : proxy + placeURL,
            method : "GET"
        }).done(function(response) {
            for (i = 0; i < 20; i++){
                let output = response.results[i];
                if (namesArray.includes(output.name) === false){
                    namesArray.push(output.name);
                    idArray.push(output.place_id);
                    for (j = 0; j < output.types.length; j++){
                        typesArray.push(output.types[j]);
                    }
                }
                    typesArray.sort();
                    for (o = 0; o < typesArray.length; o++) {
                        let currentElem = typesArray[o];
                        let index = typesArray.indexOf(currentElem);
                        if (currentElem === "point_of_interest" || currentElem === "establishment") {
                            typesArray.splice(index, 1);
                            junk.push(currentElem);
                        } 
                    }
                }
                for (k = 0; k < idArray.length; k++) {
                    let placeID = idArray[k];
                    let detailsURL = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&placeid=" + placeID + "&fields=rating,review";
                    $.ajax({
                        url : proxy + detailsURL,
                        method : "GET"
                    }).done(function(response) {
                        console.log(response);
                    })
                    }
            console.log(junk);
            console.log(response);
            console.log(namesArray);
            console.log(idArray);
            console.log(typesArray);
        })





    }




}