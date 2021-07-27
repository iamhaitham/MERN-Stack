// in the jokes.controller import your model from the models file
const Joke = require("../models/jokes.model");

// Export a function to get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
      .then(allJokes => res.json({ jokes: allJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

// Export a function to get a single joke
module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Export a function to create a joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
      .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

// Export a function to update a joke
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedJoke => res.json({ joke: updatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

// Export a function to delete a joke
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

// Export a function to get a random joke
module.exports.findRandomJoke = (req, res) => {
    Joke.countDocuments({})
        .then((count) => {
            Joke.findOne({}).skip(getRandomIntInclusive(0, count - 1))
                .then(joke => res.json({joke: joke}))
        })
        .catch(err => res.json({message: "Something went wrong", error: err}));
};