// Opens App Routes
module.exports = function( app, passport ) {
	
	// GET Routes
	app.get('/', function( req, res, next ) {
		res.render( 'layout.jade' );
	});
	
	// Login & Registration
	app.post( '/login', 
		passport.authenticate( 'local', { failureRedirect: '/?login-fail' } ),
		function(req, res) {
			res.redirect( '/' );
	});
	app.post( '/register', function( req, res, next ) {
		var User = require( './../models/users.js' );
		var user = new User( req.body );
		user.save( function( err ) {
			if( err ) res.send( err );
			res.redirect( '/' );
		});
	});
	app.get( '/logout', function( req, res, next ) {
		req.session.destroy();
		res.redirect( '/' );
	});
}