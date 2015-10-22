var mongoose    = require( 'mongoose' );
var Schema      = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String },
  salt: { type: String },
  auth: { type: String, default: 'local' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  seen_at: { type: Date, default: Date.now }
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