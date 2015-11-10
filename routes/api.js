// Dependencies
var User			= require( './../models/users.js' );
var List			= require( './../models/lists.js' );
var Item			= require( './../models/items.js' );

// Opens App Routes
module.exports = function( app ) {
	
	// Users
	app.get( '/api/users', function( req, res, next ) {
		User.find().exec( function( err, users ) {
			if( err ) res.send( err );
			res.json( users );
		});
	});
	app.post( '/api/users', function( req, res, next ) {
		var user = new User( req.body );
		user.save( function( err ) {
			if( err ) res.send( err );
			res.json( req.body );
		});
	});
	app.get( '/api/users/:user', function( req, res, next ) {
		User.findOne({ id: req.params.user }).exec( function( err, users ) {
			if( err ) res.send( err );
			res.json( users );
		});
	});
	app.put( '/api/users/:user', function( req, res, next ) {
		// TODO: Update user
	});
	app.delete( '/api/users/:user', function (req, res, next ) {
		// TODO: Delete user
	})
	
	// Lists
	app.get( '/api/lists', function( req, res, next ) {
		List.find().exec( function( err, lists ) {
			if( err ) res.send( err );
			res.json( lists );
		});
	});
	app.post( '/api/lists', function( req, res, next ) {
		var list = new List( req.body );
		list.save( function( err ) {
			if( err ) res.send( err );
			res.json( req.body );
		});
	});
	app.get( '/api/lists/:list', function( req, res, next ) {
		List.findOne({ id: req.param.list }).exec( function( err, list ) {
			if( err ) res.send( err );
			res.json( list );
		});
	});
	app.put( '/api/lists/:list', function( req, res, next ) {
		// TODO: Update/rename list
	});
	app.delete( '/api/lists/:list', function (req, res, next ) {
		// TODO: Check that it is owned by current user
		List.findByIdAndRemove( req.params.list , function( err, list ) {
			if( err ) res.send( err );
			res.json({ 'success': true });
		});
	});
	
	app.get( '/api/users/:user/lists', function( req, res, next ) {
		List.find({ user: req.params.user }).exec( function( err, lists ) {
			if( err ) res.send( err );
			res.json( lists );
		});
	});
	
	// Items
	app.get( '/api/items', function( req, res, next ) {
		Item.find().exec( function( err, items ) {
			if( err ) res.send( err );
			res.json( items );
		});
	});
	app.post( '/api/items', function( req, res, next ) {
		var item = new Item( req.body );
		item.save( function( err ) {
			if( err ) res.send( err );
			res.json( req.body );
		});
	});
	app.get( '/api/items/:item', function( req, res, next ) {
		Item.findOne({ id: req.params.item }).exec( function( err, items ) {
			if( err ) res.send( err );
			res.json( items );
		});
	});
	app.put( '/api/items/:item', function( req, res, next ) {
		// TODO: Update item
	});
	app.put( '/api/items/:item/completed', function( req, res, next ) {
		// TODO: Update item set completed = true
		// TODO: Check that item is 'public' or owned by current user
	});
	app.delete( '/api/items/:item', function( req, res, next ) {
		// TODO: Check that it is owned by current user
		Item.findByIdAndRemove( req.params.item , function( err, item ) {
			if( err ) res.send( err );
			res.json({ 'success': true });
		});
	});
	
	// Items in List
	app.get( '/api/lists/:list/items', function( req, res, next ) {
		Item.find({ list: req.params.list }).exec(
		function( err, items ) {
			if( err) res.send( err );
			res.json( items );
		});
	})
}