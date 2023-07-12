const TariffItem = require("../models/tariffItemModel");

const createTariffItem = async (req, res) => {
  try {
    const { hsnCode, description, rodtepRate, uqc, cap } = req.body;

    const tariffItem = new TariffItem({
      hsnCode,
      description,
      rodtepRate,
      uqc,
      cap,
    });

    await tariffItem.save();

    res.status(201).json(tariffItem);
  } catch (error) {
    console.error("Error storing tariff item details:", error);
    res.status(500).json({ error: "Unable to store tariff item details" });
  }
};


const getTariffItems = async (req, res) => {
  try {
    const tariffItems = await TariffItem.find();

    res.status(200).json(tariffItems);
  } catch (error) {
    console.error("Error fetching tariff items:", error);
    res.status(500).json({ error: "Unable to fetch tariff items" });
  }
};

module.exports = {
  createTariffItem,
  getTariffItems
};
