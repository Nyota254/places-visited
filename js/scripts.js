function PlaceVisited(name, location, landmark, timeOfYear, notes){
    this.placeName = name;
    this.placeLocation = location;
    this.placeLandmark = landmark;
    this.placeTimeOfYear = timeOfYear;
    this.placeNotes = notes;
}

$(document).ready(function(){
    $("form#places-visited").submit(function(){
        event.preventDefault();
        var inputtedplaceName = $("#place").val();
        var inputtedplaceLocation = $("#location").val();
        var inputtedplaceLandmark = $("#landMark").val();
        var inputtedtimeOfYear = $("#timeOfYear").val();
        var inputtednotes = $ ("#notes").val();
        
        var newplacesVisited = new PlaceVisited(inputtedplaceName, inputtedplaceLocation, inputtedplaceLandmark, inputtedtimeOfYear, inputtednotes);
        console.log(newplacesVisited);
        $("ol.listPlaces").append("<li><span class = 'listOutput'>" + newplacesVisited.placeName + "</span></li>");

        $(".listOutput").last().click(function(){
            $("#information").show();
            $("#locationOutput").text(newplacesVisited.placeLocation);
            $("#landmarkOutput").text(newplacesVisited.placeLandmark);
            $("#timeOfYearOutput").text(newplacesVisited.placeTimeOfYear);
            $("#notesOutput").text(newplacesVisited.placeNotes);
        });

    });
});