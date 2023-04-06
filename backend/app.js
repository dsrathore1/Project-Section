const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: "config.env" });

const PORT = process.env.PORT|| 4005;

app.use()

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Your website is listening on http://localhost:${PORT}`);
});