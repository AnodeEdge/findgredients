const express = require("express");
// const bodyPraser = require('body-parser')
const cors = require("cors");

const app = express();
const port = 5000;

const edamamAppID = "adf318f9";
const edamamApiKey = "246ca4737cfa9f606088ce77431a86ee";

app.use(cors());

app.get("/", (req, res) => {
    console.log(req.query.q)
    res.json({query: req.query.q});
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}`)
);
