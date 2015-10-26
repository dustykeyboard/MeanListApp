'use strict';


// Dependencies
var bodyParser      = require( 'body-parser' );
var express         = require( 'express' );
var methodOverride  = require( 'method-override' );
var mongoose        = require( 'mongoose' );
var port            = process.env.PORT || 3000;

var app             = express();

// Express Config
mongoose.connect( 'mongodb://localhost/MeanTodoApp' );
app.use( express.static( __dirname + '/public' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.text() );
app.use( bodyParser.json({ type: 'application/vnd.api+json' }) );
app.use( methodOverride() );

// Routes
require( './routes/api.js' )( app );
require( './routes/index.js' )( app );
require( './routes/users.js' )( app );
require( './routes/lists.js' )( app );

app.get( '/status', function( req, res, next ){
  res.json({ status: true });
});

// Listen
app.listen(port);
console.log( 'MeanTodoApp listening on port ' + port );