// Opens App Routes
module.exports = function( app ){

	// GET Routes
	app.get('/users/', function( req, res ){
		res.render( 'users.jade' );
	});
	app.get('/users/:username', function( req, res ){
		res.render( 'users.jade', { profile: req.params.username });
	});
}