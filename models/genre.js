let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GenreSchema = new Schema(
  {
    name: { type: String, required: true, min: 3, max: 100 }
  }
);

//Virtual for genre's URL
GenreSchema
  .virtual('url')
  .get(function () {
    return '/genre/' + this._id;
  });

//Export Model
module.exports = mongoose.model('Genre', GenreSchema)