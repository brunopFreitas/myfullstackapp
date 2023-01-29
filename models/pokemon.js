const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  num: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    maxLength: 100
  },
  img: {
    type: String,
    required: true,
    maxLength: 200
  },
  type: [{
    type: String,
    enum: ["Bug","Dragon","Electric","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock","Water"],
    required: true
  }],
  height: {
    type: String,
    required: false
  },
  weight: {
    type: String,
    required: false
  },
  weaknesses: [{
    type: String,
    enum: ["Bug","Dragon","Electric","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock","Water"],
    required: true
  }],
  prev_evolution: [{
    num: {
      type: String,
    },
    name: {
      type: String,
    }
  }],
  next_evolution: [{
    num: {
      type: String,
    },
    name: {
      type: String,
    }
  }]
}, {
  collection: 'pokemon'
});

const UserSchema = new Schema({
  firstName: {
    type: String,
    max: 100,
    required: true
  },
  lastName: {
    type: String,
    max: 100,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    maxLength: 100
  },
  password: {
    type: String,
    required: true,
    maxLength: 200
  }
}, {
  collection: 'user'
});

// Export model
module.exports = {
  Pokemon: mongoose.model("Pokemon", PokemonSchema),
  User: mongoose.model("User", UserSchema)
}