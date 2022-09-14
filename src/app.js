require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { router } = require("./routes");

app.use(cors());
app.use("/v1", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("La api esta lista", PORT));
