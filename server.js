'use strict';


// Dependencies
var bodyParser      = require( 'body-parser' );
var express         = require( 'express' );
var methodOverride  = require( 'method-override' );
var mongoose        = require( 'mongoose' );
var port            = process.env.PORT || 3000;
var session         = require( 'express-session' );
var sessionMongo    = require( 'connect-mongo' );
var app             = express();

// Authentication
var passport        = require( 'passport' );
var Strategy        = require( 'passport-local' ).Strategy;
var User            = require( './models/users.js' );

passport.use( new Strategy(
  function( username, password, next ){
    User.findOne({ username: username }).exec( function( err, user ){
      if ( err ) return next( err )
      if ( !user ) return next( null, false );
      if ( user.password != password ) return next( null, false );
      console.log( 'successful auth', username );
      return next( null, user );
    })
  }
));

passport.serializeUser( function( user, next ){
	next( null, user._id );
});

passport.deserializeUser( function( id, next ){
	User.findOne({ _id: id}).exec( function( err, user ){
		if( err ) return next( err );
		if( !user ) return next( null, false );
		return next( null, user );
	});
})

// Express Config
mongoose.connect( 'mongodb://localhost/MeanTodoApp' );
app.use( express.static( __dirname + '/public' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.text() );
app.use( bodyParser.json({ type: 'application/vnd.api+json' }) );
app.use( methodOverride() );

app.use(
  session({
    mongooseConnection: mongoose.connection ,
    'secret': 'i spend my money on coffee',
    'resave': false,
    'saveUninitialized': false
  })
);

app.use( passport.initialize() );
app.use( passport.session() );

app.use(function(req, res, next) {
  res.locals.user = false;
  if( req.user ){
    res.locals.user = req.user;
    res.locals.lists = []; 
  }
  next();
});

// Routes
require( './routes/api.js' )( app );
require( './routes/index.js' )( app, passport );
require( './routes/users.js' )( app );
require( './routes/lists.js' )( app );

app.get( '/status', function( req, res, next ){
  res.json({ status: true });
});

// Listen
app.listen(port);
console.log( 'MeanTodoApp listening on port ' + port );