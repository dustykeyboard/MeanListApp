// Dependencies
var mongoose 		= require( 'mongoose' );
var User			= require( './../models/users.js' );

// Opens App Routes
module.exports = function( app ){

	// GET Routes
	app.get('/users/', function( req, res ){
		res.render( 'users.jade' );
	});
	app.get('/users/:user', function( req, res ){
		res.render( 'users.jade' );
	});
}