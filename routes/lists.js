// Dependencies
var mongoose 		= require( 'mongoose' );
var List			= require( './../models/lists.js' );

// Opens App Routes
module.exports = function( app ){
	
	// GET Routes
	app.get('/lists/new', function( req, res ){
		// Create a new list
		var list = new List({
			user: 'Sample User',
			title: req.body.title || "New List",
			items: [
				
			]
		});
		list.save(function (err) {
			if ( err )
				res.send( err );
				
			res.redirect( '/lists/' + list._id );
		});
	})
	app.get('/lists/:id', function( req, res ){
		var id = req.params.id || null;
		
		var query = List.find().exec( function( err, lists ){
			if( err ){
				res.send( err );
			}
				
			res.render( 'list.jade', { id: id, all: lists })
		})
		
		//res.render( 'list.jade', { id : id } );
	});
	app.get('/api/lists/', function( req, res ){
		// Find all lists in db
		var query = List.find({});
		query.exec( function( err, lists ){
			if( err )
				res.send( err );
			
			// If no errors, respond with JSON of all lists
			res.json( lists );
		});
	});
	app.get('/api/list/:id', function( req, res ){
		// Find matching lists in db
		var query = List.findOne({ _id: req.params.id });
		query.exec( function( err, lists ){
			if( err )
				res.send( err );
			
			// If no errors, respond with JSON of matchig lists
			res.json( lists );
		});
	});
	
	// POST Routes
	app.post( '/api/lists/', function( req, res ){
		// Create new List from ListSchema
		var newList = new List( req.body );
		
		// Save new List to db
		newList.save( function( err ){
			if( err )
				res.send( err );
			
			// If no errors, respond with JSON of new List
			res.json( req.body );
		});
	});
}