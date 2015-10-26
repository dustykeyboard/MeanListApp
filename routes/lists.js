// Dependencies
var mongoose 		= require( 'mongoose' );
var List			= require( './../models/lists.js' );

// Opens App Routes
module.exports = function( app ){
	
	// GET Routes
	app.get('/lists/create', function( req, res ){
		res.render('list.create.jade');
	})
	app.get('/lists/:list', function( req, res ){
		res.render( 'list.jade', { id: req.params.list });
	});
}