const listSchema = new mongoose.Schema({
  ctype: {
    type: String,
    // bulitin validator
    require: true,
    lowercase: true,
  },
  video: {
    type: Number,
    // user define validator
    validate(value) {
      if (value < 0) {
        throw new Error("Vidoe count should not be negative")
      }
    },
  },
})
