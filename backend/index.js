const express = require('express')
const cors = require('cors')
const requestHandler = require('./helpers/edemamRequestHandler')


// import express from 'express'
// import cors from 'cors'
// import { getRecipes } from '../old/helpers/edemamRequestHandler'
// import mongoose from 'mongoose'
// import Favorite from '../old/models/Favorites'
// import User from './models/User'

const app = express();
const port = 5000;

app.use(express.urlencoded({extended: true}))
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
