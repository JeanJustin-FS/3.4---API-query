import mongoose from "mongoose";
const horsepowerSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,

    make: {
      type: String,
      required: [true, "You need to add a make"],
    },
    model: {
      type: String,
      required: [true, "You need to add a model"],
    },
    year: {
      type: Number,
      required: [true, "You need to add a year"],
    },
    horsepower: {
      type: Number,
      required: [true, "You need to add a horsepower"],
      set: value => {
        if (typeof value === "string") {
          return parseInt(value.replace(/\D/g, ""));
        }
        return value;
      },
    },
    completed: {
      type: Boolean,
      required: [true, "Path `completed` is required."],
      default: false,
    },

    carDetails: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CarDetail",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Horsepower", horsepowerSchema);
