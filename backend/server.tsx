import express from 'express'
import cors from 'cors'
import { getRecipes } from './helpers/edemamRequestHandler'

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (request, response) => {
  console.log(request.query)
  response.json({ query: request.query.q });
});

app.get("/recipes", async (request, response) => {
  console.log("Request query contains: " + JSON.stringify(request.query)) 
  let data = await getRecipes(request.query)
  response.json(data.data)
})

// app.get("/next_recipes", async (request, response) => {
//   console.log("Request query contains: " + JSON.stringify(request.query.href))
//   let data = await getNextRecipes(request.query)
//   response.json({ query: request.query.q });
// })

app.listen(port, () =>
  console.log(`Findgredient API listening on port ${port}`)
);
