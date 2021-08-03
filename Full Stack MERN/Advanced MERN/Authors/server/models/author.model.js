const mongoose = require('mongoose');

mongoose.plugin(schema => {
    schema.pre('findOneAndUpdate', setRunValidators);
    schema.pre('updateMany', setRunValidators);
    schema.pre('updateOne', setRunValidators);
    schema.pre('update', setRunValidators);
  });
  
  function setRunValidators () {
    this.setOptions({ runValidators: true });
  }

const AuthorSchema = new mongoose.Schema({
    authorName: { type: String, 
        required:[true,'Author Name is required!'], 
        minlength:[3,'Author Name must be at least 3 characters long'] }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);
