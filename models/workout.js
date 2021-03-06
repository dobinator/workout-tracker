const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type",
      },

      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name",
      },

      duration: {
        type: Number,
        required: "Enter an exercise duration",
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});



const Exercise = mongoose.model("Workout", WorkoutSchema);
module.exports = Exercise;
