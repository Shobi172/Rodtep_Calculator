const mongoose = require('mongoose');

const tariffItemSchema = new mongoose.Schema({
  hsnCode: {
    type: String
  },
  description: {
    type: String
  },
  rodtepRate: {
    type: String
  },
  uqc: {
    type: String
  },
  cap: {
    type: String
  },
});

const TariffItem = mongoose.model('TariffItem', tariffItemSchema);

module.exports = TariffItem;
