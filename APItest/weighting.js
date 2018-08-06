function weighter(){
    navigator.geolocation.getCurrentPosition(location) 
    

    function location(position) {
        let itemWeight = 0;
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        const proxy = "https://cors-anywhere.herokuapp.com/"; 
        const placeURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&location=" + latitude + "," + longitude + "&radius=8000&keyword=takeaway";
       
        
        $.ajax({
            url : proxy + placeURL,
            method : "GET"
        }).then(function(response) {
            let namesArray = [];
            let typesArray = [];
            let junk = [];
            let typeCount = 0;
            for (i = 0; i < 20; i++){
                let output = response.results[i];
                if (!namesArray.includes(output.name)){
                    namesArray.push(output.name);
                    for (i = 0; i < output.types.length; i++){
                        typesArray.push(output.types[i]);
                    }
                }
                let placeID = output.place_id;
                let detailsURL = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyAiP3V7JQ-liMjMuRigFWZCIs3Wc4QR_z8&placeid=" + placeID + "&fields=rating,review";

            $.ajax({
                url : proxy + detailsURL,
                method : "GET"
            }).done(function(response) {
                console.log(response);
            })
            }
            typesArray.sort();
            for (i = 0; i < typesArray.length; i++) {
                let currentElem = typesArray[i];
                let index = typesArray.indexOf(currentElem);
                console.log(typeof currentElem);
                if (currentElem === "point_of_interest") {
                    typesArray.splice(index);
                    junk.push(currentElem);
                } else if (currentElem === "establishment") {
                    typesArray.splice(index);
                    junk.push(currentElem);
                }
            }
            console.log(typesArray.length)
            console.log(junk);
            console.log(response);
            console.log(namesArray);
            console.log(typesArray);
        })





    }




}