// import React from 'react'
const baseURI = "http://localhost:5000/"

// edamam example recipe search query
// 'https://api.edamam.com/search?app_id=&app_key=&q=coffee'

const appendURI = "recipes"

const sanitizeRecipeSearchParams = (searchParams) => {
  const healthParams = searchParams.health !== undefined ? searchParams.health : []
  const dietParams = searchParams.diet !== undefined ? searchParams.diet : []
  delete searchParams.health
  delete searchParams.diet
  const revisedParams = new URLSearchParams(searchParams)
  for (let i = 0; i < healthParams.length; i++) {
    revisedParams.append("health", healthParams[i])
  }
  for (let i = 0; i < dietParams.length; i++) {
    revisedParams.append("diet", dietParams[i])
  }
  // console.log(revisedParams.toString())
  return revisedParams
}

const getRecipes = async (searchParams) => {
  const URI = baseURI + appendURI + "?" + sanitizeRecipeSearchParams(searchParams).toString()
  const response = await fetch(URI);
  return await response.json();
};

const getNextRecipes = async (nextURL) => {
  // console.log(baseURI + appendURI + "?" + "href=" + nextURL)
  const response = await fetch(
    nextURL
  );
  return await response.json();
}

const clean = (obj) => {
  for (const prop in obj) {
    if (obj[prop] === null || obj[prop] === undefined || obj[prop] === "" || obj[prop].length === 0) {
      delete obj[prop]
    }
  }
  return obj
}

export { getRecipes, getNextRecipes, clean };
