const TariffItem = require("../models/tariffItemModel");

const createTariffItem = async (req, res) => {
  try {
    const { hsnCode, productDescription, uqc, cap } = req.body;

    const tariffItem = new TariffItem({
      hsnCode,
      productDescription,
      uqc,
      cap,
    });

    await tariffItem.save();

    res.status(200).json(tariffItem);
  } catch (error) {
    console.error("Error saving tariff item:", error);
    res.status(500).json({ error: "Error saving tariff item" });
  }
};

module.exports = { createTariffItem };
