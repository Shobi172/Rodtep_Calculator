const express = require("express");
const tariffItemController = require("../controllers/tariffItemController");

const router = express.Router();

router.post("/tariff-items", tariffItemController.createTariffItem);
router.get("/getTariff-items", tariffItemController.getTariffItems);

module.exports = router;
