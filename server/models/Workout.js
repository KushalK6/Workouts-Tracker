import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // enti edhi
      ref: "User",  // ref ante?
      required: true,  // last ele end lo kuda comma pettaru
    },
    category: {
      type: String,
      required: true,
    },
    workoutName: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    caloriesBurned: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }   // ee timestamps golla enti
);

export default mongoose.model("Workout", WorkoutSchema);
