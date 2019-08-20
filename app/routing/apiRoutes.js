var friends = require("../data/friends.js");


module.exports = function (app) {

    //Get route for JSON of API info
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    //Get route for returning API info
    app.get('/api/friendList', function (req, res) {
        res.json(friends);
    });

    
    //Post route for posting new friends and returning matches
    app.post("/api/friends", function (req, res) {

      var newFriend = req.body;
      friends.push(newFriend);
      var difference = 0;
      var friendScores = [];
      //Loops through friends array
      for (var i = 0; i < friends.length; i++) {
          //If current user is not already in the API
          if (newFriend.nameValue !== friends[i].nameValue || newFriend.imageURL !== friends[i].imageURL) {

              //loop through current user's answerArray
              for (var j = 0; j < newFriend.answerArray.length; j++) {
                  //gets answer value for current user
                  var num1 = parseInt(newFriend.answerArray[j]);
                  //sets num2 as answer values for friends answers
                  var num2 = parseInt(friends[i].answerArray[j]);
                  //Sets value of difference to absolute value
                  difference += Math.abs(num1 - num2);
                  console.log(difference);

              }
          //Each difference is pushed to the friendScores array
          friendScores.push(difference);
          //Adds the difference key to each friends object, with its value as difference
          friends[i].difference = difference;
          }
          //Resets difference
          difference = 0;
      };

      //Find the minimum and maximum value in the friendScores array
      var goodMatch = Math.min(...friendScores);
      var badMatch = Math.max(...friendScores);

      var match = [];
      var badMatch = [];
      //Loop through the friends array
      for (var k = 0; k < friends.length; k++) {
          //If the difference key value matches the minimum in the friendScores array, it is pushed to the match array
          if (friends[k].difference === goodMatch) {
              match.push(friends[k]);
          }
          //If the difference key value matches the maximum in the friendScores array, it is pushed to the badMatch array
          if (friends[k].difference === badMatch) {
              badMatch.push(friends[k]);
          }
      }
      res.json(friends);
    });
  }