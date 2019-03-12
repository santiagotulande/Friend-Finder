// Pull in required dependencies
var path = require('path');

// Import the list of friend from friends.js
var friendslist = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	

	// link to list of friend.js
	app.get('/api/friends', function(req, res) {
		res.json(friendslist);
	});

	// Add new to friend.js
	app.post('/api/friends', function(req, res) {
		
		var userInput = req.body;
		

		var userResponses = userInput.scores;
		

		
		var matchName = '';
		var matchImage = '';
		var totalDifference = 50; 

		// loop the list
		for (var i = 0; i < friendslist.length; i++) {
			
			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendslist[i].scores[j] - userResponses[j]);
			}
		

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				

				totalDifference = diff;
				matchName = friendslist[i].name;
				matchImage = friendslist[i].photo;
			}
		}

		// Add new user
		friendslist.push(userInput);

		// Send response
		res.json({status: 'Matched', matchName: matchName, matchImage: matchImage});
	});
};