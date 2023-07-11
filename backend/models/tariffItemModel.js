const mongoose = require("mongoose");

const tariffItemSchema = new mongoose.Schema({
  hsnCode: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  uqc: {
    type: String,
    required: true,
  },
  cap: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("TariffItem", tariffItemSchema);
