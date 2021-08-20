// import React from 'react'
const baseURI = "http://localhost:5000/"

// edamam example recipe search query
// 'https://api.edamam.com/search?app_id=&app_key=&q=coffee'

const getRecipes = async (searchParams) => {
  const appendURI = "recipes"
  new URLSearchParams(searchParams).toString()
  console.log(baseURI + appendURI + "?" + new URLSearchParams(searchParams).toString())
  const response = await fetch(
    baseURI + appendURI + "?" + new URLSearchParams(searchParams).toString()
  );
  return await response.json();
};

export {getRecipes};
