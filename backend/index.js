const requestHandler = require("./helpers/edemamRequestHandler");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (request, response) => {
  console.log(request.query)
  response.json({ query: request.query.q });
});

app.get("/recipes", async (request, response) => {
  console.log("Request query contains: " + JSON.stringify(request.query)) 
  let data = await requestHandler.getRecipes(request.query)
  response.json(data.data)
})

app.listen(port, () =>
  console.log(`Findgredient API listening on port ${port}`)
);
