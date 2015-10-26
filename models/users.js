var mongoose    = require( 'mongoose' );
var Schema      = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  apikey: { type: String },
  created_at: { type: Date, default: Date.now }
});

UserSchema.pre( 'save', function( next ){
  var now = new Date();
  this.updated_at = now;
  if( !this.created_at ){
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model( 'User', UserSchema );