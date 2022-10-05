const mongoose = require('mongoose')

const EntrySchema = new mongoose.Schema({
  entry: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  numOfDrinks: {
    type: Number,
    required: true,
  },
  mood: {
    type: Number,
    required: true,
  },
  exercise: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Entry', EntrySchema)
