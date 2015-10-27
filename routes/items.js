// Opens App Routes
module.exports = function( app ){
	
	// GET Routes
	app.get( '/lists/:list/items', function( req, res ){
		res.render( 'items.jade', { list: req.params.list });
	});
}