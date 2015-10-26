var mongoose    = require( 'mongoose' );
var Schema      = mongoose.Schema;

var ItemSchema = new Schema({
  list: { type: String, required: true, index: true },
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: String, default: false },
  completed_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

ItemSchema.method.completedBy = function( user ) {
  this.completed = user;
  this.complated_at = Date.now;
  return true;
};

ItemSchema.pre( 'save', function( next ){
  var now = new Date();
  this.updated_at = now;
  if( !this.created_at ){
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model( 'Item', ItemSchema );