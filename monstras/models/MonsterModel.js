const mongoose = require("mongoose");

const MonsterSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must have a name for the monster"]
  },
  category: {
    type: String,
    default: "Other"
  },
  images: {
    type: Array
  }
 
});

module.exports = mongoose.model("Monster", MonsterSchema);