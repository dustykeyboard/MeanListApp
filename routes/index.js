// Opens App Routes
module.exports = function( app ){
	
	// GET Routes
	app.get('/', function( req, res ){
		// Find all users in db
		res.render( 'home.jade' );
	});
}