// create array to hold initial holiday topics for buttons
var topics = ["Christmas", "New Year's Eve", "President's Day", "Memorial Day", "Fourth of July", "Labor Day",
"Halloween", "Thanksgiving", "Hanukkah", "Diwali"]

// displayButtons creates buttons for each topics
// rewrites buttons displayed when new button added
function displayButtons() {
    // delete displayed buttons to prevent doubled buttons
    $("#show-buttons").empty();
    // loop to create buttons
    for (var k = 0; k < topics.length; k++) {
        // create button element
        var elem = $("<button>");
        // add class to button
        elem.addClass("topic-btn");
        // add attribute to button
        elem.attr("topic", topics[k]);
        // add name for button
        elem.text(topics[k]);
        // append button to the show-buttons div
        $("#show-buttons").append(elem);
        console.log("topics[k] " + topics[k]);
    }
}

// add function via add-topic-btn to add button to list
$("#add-topic-btn").on("click", function(event) {
        // allow for form submission using enter button
        event.preventDefault();
        // get input from topic-input text box; trims leading/ending spaces
        var new_topic = $("#topic-input").val().trim();
        // add topic-input to topics array
        topics.push(new_topic);
        // show new button by rewriting buttons
        displayButtons();
    });
    
// add click event to all images for displaying topic gifs
$(document).on("click", ".topic-btn", processMovie);
// intial call to display buttons
displayButtons();
function processMovie() {
    // get topic for gifs to be retrieved
    var got_topic = $(this).attr("topic");
    // create giphy api search string with api key and limit of 10 gifs retrieved
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        got_topic + "&api_key=tiqUaUBX3u8WwTeMQK4mUBb2X8AdvqPa&limit=10";
    // perform ajax query
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // set up response when promise completed
    .then(function(response) {
        // store results (all 10) from website in variable
        var results = response.data;
        // create divs for each of 10 gifs
        for (var k = 0; k < results.length; k++) {
            // variable for div creation
            var giffy = $("<div>");
            // variable for p creationg
            var para = $("<p>").text("Rating: " + rating);
            // variable to create img
            var image = $("<img>");
            // variable to hold rating for each gif
            var rating = results[k].rating;
            // add class gif to image div
            image.addClass("gif");
            // add atrribute for giphy source to image div
            image.attr("src", results[k].images.fixed_height_still.url);
            // prepend p and img elements
            giffy.prepend(para);
            giffy.prepend(image);
            // prepend div to display gif
            $("#display-gifs").prepend(giffy);
        }
    });
}

// create event handler to animate and de-animate gifs
$(document).on("click", ".gif", function() {
    // create variable for src attribute for image click on
    var src = $(this).attr("src");
    //  change gif from playing to non-playing state
    if ($(this).hasClass("playing")) {
        // replace src with non-playing gif image
        $(this).attr("src", src.replace(/\.gif/i, "_s.gif"))
        // remove 'playing' class from gif
        $(this).removeClass("playing");
    } else {
        //change gif from non-playing to playing state
        // add 'playing' class to gif
        $(this).addClass("playing");
        // replace src with playing gif image
        $(this).attr("src", src.replace(/\_s.gif/i, ".gif"))
    }

})

// changeColor alternates background color and text color for banner
function changeColor() {
    if ($("h1").css("background-color") == "rgb(255, 0, 0)") {
        $("h1").css("background-color", "blue");
        $("h1").css("color", "white");
    }
    else {
        $("h1").css("background-color", "red");
        $("h1").css("color", "yellow");
    }
}
// start changeColor
setInterval(changeColor, 3000);
