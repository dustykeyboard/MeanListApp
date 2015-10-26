// Dependencies
var mongoose 		= require( 'mongoose' );
var User			= require( './../models/users.js' );
var List			= require( './../models/lists.js' );
var Item			= require( './../models/items.js' );

// Opens App Routes
module.exports = function( app ){
	
	// Users
	app.get( '/api/users', function( req, res, next ){
		User.find({ }).exec( function( err, users ){
			if( err ) res.send( err );
			res.json( users );
		});
	});
	app.post( '/api/users', function( req, res, next ){
		var user = new User( req.body );
		user.save( function( err ){
			if( err ) res.send( err );
			res.json( req.body );
		});
	});
	app.get( '/api/users/:user', function( req, res, next ){
		User.find({ id: req.params.user }).exec( function( err, users ){
			if( err ) res.send( err );
			res.json( users );
		});
	});
	app.put( '/api/users/:user', function( req, res, next ){
		// TODO: Update user
	});
	app.delete( '/api/users/:user', function (req, res, next ){
		// TODO: Delete user
	})
	
	// Lists
	app.get( '/api/lists', function( req, res, next ){
		List.find({ }).exec( function( err, lists ){
			if( err ) res.send( err );
			res.json( lists );
		});
	});
	app.post( '/api/lists', function( req, res, next ) {
		var list = new List( req.body );
		list.save( function( err ){
			if( err ) res.send( err );
			res.json( req.body );
		});
	});
	app.get('/api/lists/:list', function( req, res, next ){
		List.find({ id: req.param.list }).exec( function( err, lists ){
			if( err ) res.send( err );
			res.json( lists );
		});
	});
	app.put( '/api/lists/:list', function( req, res, next ){
		// TODO: Update list
	});
	app.delete( '/api/lists/:list', function (req, res, next ){
		// TODO: Delete list
	})
	
	app.get('/api/users/:user/lists', function( req, res, next ){
		List.find({ user: req.params.user }).exec( function( err, lists ){
			if( err ) res.send( err );
			res.json( lists );
		});
	});
	
	// Items
	app.get( '/api/items', function( req, res, next ){
		Item.find({ }).exec( function( err, items ){
			if( err ) res.send( err );
			res.json( items );
		});
	});
	app.post( '/api/items', function( req, res, next ){
		var item = new Item( req.body );
		item.save( function( err ){
			if( err ) res.send( err );
			res.json( req.body );
		});
	});
	app.get( '/api/items/:item', function( req, res, next ){
		Item.find({ id: req.params.item }).exec( function( err, items ){
			if( err ) res.send( err );
			res.json( items );
		});
	});
	app.put( '/api/items/:item', function( req, res, next ){
		// TODO: Update item
	});
	app.delete( '/api/items/:item', function( req, res, next ){
		// TODO: Delete item
	});
}