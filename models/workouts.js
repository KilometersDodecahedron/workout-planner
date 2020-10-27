//when working with Mongoose, the models folder essentially also functions as a schema folder
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create a schema object
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: []
})

//the model will be named "Workout"
module.exports = mongoose.model("Workout", WorkoutSchema);