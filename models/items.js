var mongoose    = require( 'mongoose' );
var Schema      = mongoose.Schema;

var ItemSchema = new Schema({
  user: { type: String, required: true },
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

ItemSchema.pre( 'save', function( next ){
  var now = new Date();
  this.updated_at = now;
  if( !this.created_at ){
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model( 'Item', ItemSchema );