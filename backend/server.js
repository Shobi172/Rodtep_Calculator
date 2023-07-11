const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const tariffItemRoutes = require("./routes/tariffItemRoutes");

const app = express();
const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/rodtep-calculator", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api", tariffItemRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
