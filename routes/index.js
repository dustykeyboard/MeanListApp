// Opens App Routes
module.exports = function( app, passport ){
	
	// GET Routes
	app.get('/', function( req, res ){
		res.render( 'home.jade' );
	});
	
	// Login & Registration
	app.get( '/login', function( req, res, next ){
		res.render( 'login.jade' );
	})
	app.post( '/login', 
		passport.authenticate( 'local', { failureRedirect: '/login?fail' }),
		function(req, res) {
			res.redirect( '/' );
	});
	app.get( '/register', function( req, res, next ){
		res.render( 'register.jade' );
	})
	app.post( '/register', function( req, res, next ){
		var User = require( './../models/users.js' );
		var user = new User( req.body );
		user.save( function( err ){
			if( err ) res.send( err );
			res.redirect( '/' );
		});
	});
	app.get( '/logout', function( req, res, next ){
		req.session.destroy();
		res.redirect( '/login' );
	});
}