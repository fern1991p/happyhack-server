const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    image: {
      type: String,
    },
    events: {
      type: Array,
    },
    jobs: {
      type: Array,
    },
    skills: {
      type: String,
    }, 
  },
  {
    timestamps: true,
  },

);

const User = model("User", userSchema);

module.exports = User;
