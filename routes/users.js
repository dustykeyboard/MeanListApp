// Dependencies
var mongoose 		= require( 'mongoose' );
var User			= require( './../models/users.js' );

// Opens App Routes
module.exports = function( app ){

	// GET Routes
	app.get('/api/users/', function( req, res ){
		console.log( '// Find all users in db' );
		var query = User.find({});
		query.exec( function( err, users ){
			if( err )
				res.send( err );
			
			// If no errors, respond with JSON of all users
			res.json( users );
		});
	});
	app.get('/api/users/:id', function( req, res ){
		// Find matching users in db
		var query = User.find({ _id:req.params.id });
		query.exec( function( err, users ){
			if( err )
				res.send( err );
			
			// If no errors, respond with JSON of matchig users
			res.json( users );
		});
	});
	
	// POST Routes
	app.post( '/api/users/', function( req, res ){
		// Create new User from UserSchema
		var newUser = new User( req.body );
		
		// Save new User to db
		newUser.save( function( err ){
			if( err )
				res.send( err );
			
			// If no errors, respond with JSON of new user
			res.json( req.body );
		});
	});
}