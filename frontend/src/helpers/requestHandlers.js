// import React from 'react'
const uri = "http://localhost:5000/"

// edamam example recipe search query
// 'https://api.edamam.com/search?app_id=&app_key=&q=coffee'

const getRecipes = async (searchParams) => {
  new URLSearchParams(searchParams).toString()
  console.log(uri + "?" + new URLSearchParams(searchParams).toString())
  const response = await fetch(
    uri + "?" + new URLSearchParams(searchParams).toString()
  );
  return response.json();
};

export {getRecipes};
