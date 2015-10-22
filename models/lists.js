var mongoose    = require( 'mongoose' );
var Schema      = mongoose.Schema;

var ListSchema = new Schema({
  user: { type: String, required: true },
  title: { type: String, required: true },
  items: { type: Array, default: [] },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

ListSchema.pre( 'save', function( next ){
  var now = new Date();
  this.updated_at = now;
  if( !this.created_at ){
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model( 'List', ListSchema );