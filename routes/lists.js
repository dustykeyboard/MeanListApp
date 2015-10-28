// Opens App Routes
module.exports = function( app ){
	
	// GET Routes
	app.get( '/lists/create', function( req, res ){
		res.render('list.create.jade');
	})
	app.get( '/lists', function( req, res, next ){
		res.render( 'lists.jade' );
	});
	app.get( '/lists/:list', function( req, res ){
		res.render( 'list.jade', { list: req.params.list });
	});
	app.get( '/users/:username/lists', function( req, res, next ){
		res.render( 'lists.jade', { username: req.params.username });
	});
}