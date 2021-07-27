// in the jokes.model file create a JokeSchema and export the mongoose.model("joke", JokeSchema)
const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type:String,
        required:[true,"Joke setup is required"],
        minlength:[10,"Joke setup must be 10 charachters long at least!"]
    },
    punchline: {
        type:String,
        required:[true,"Joke punchline is required"],
        minlength:[3,"Joke punchline must be 3 characters long at least"]
    }
},{timestamps: true});
 
const Joke = mongoose.model('joke', JokeSchema);
 
module.exports = Joke;