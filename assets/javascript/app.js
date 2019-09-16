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

// createNewButton adds new button to topics list when form submitted
// function createNewButton() {
//     console.log("here I am");
//     // allow for form submission using enter button
//     // event.preventDefault();
//     // get input from topic-input text box; trims leading/ending spaces
//     var new_topic = $("#topic-input").val().trim();
//     // add topic-input to topics array
//     topics.push(new_topic);
//     console.log("created " + topics);
//     // show new button by rewriting buttons
//     // displayButtons();
// }

// add event handler to listen for clicks on topic buttons
// $(document).on("click", ".topic-btn", processMovie);


// add topic by submission through form
// $("#add-topic-btn").on("click", createNewButton);
// $("#add-topic-btn").on("click", console.log("got clicked"));

$("#add-topic-btn").on("click", function(event) {
        console.log("here I am");
        // allow for form submission using enter button
        event.preventDefault();
        // get input from topic-input text box; trims leading/ending spaces
        var new_topic = $("#topic-input").val().trim();
        // add topic-input to topics array
        topics.push(new_topic);
        console.log("created " + topics);
        // show new button by rewriting buttons
        displayButtons();
    });
    
    // intial call to display buttons
    displayButtons();