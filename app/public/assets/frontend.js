/*

$(document).ready(function() {
  // global moment 
  // blogContainer holds all of our posts
  // var blogContainer = $(".blog-container");
  var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  $(document).on("click", "button.edit", handlePostEdit);
  postCategorySelect.on("change", handleCategoryChange);
  var posts;


//ABOVE COMMENTED 8/27 @ 8:38



$("#surveySubmit").on("click", function(e) {
  e.preventDefault();
  
});

//need .val().trim() for user survey answers
//Then need Ajax call, pass as body (because it's backend)
var userData = {
  name: $("#name").val(),
  photo: $("#photo").val(),
  scores: [
    $("#q1").val(), "I prefer a nice juicy steak over a salad, since I am not a rabbit"
    $("#q2").val(), "I would eat waffles for every meal if I could."
    $("#q3").val(), "I would rather take a 'Dwyer shower.' (rubbing your armpits with air freshener) than a real shower."
    $("#q4").val(), "I believe all wine tastes the same and if you spend more than $5.00 on wine, you are very stupid."
    $("#q5").val(), ""
    $("#q6").val(),
    $("#q7").val(),
    $("#q8").val(),
    $("#q9").val(),
    $("#q10").val()
  ]
};


// AJAX post the data to the friends API.
$.post("/api/friends", userData, function(data) {


  */