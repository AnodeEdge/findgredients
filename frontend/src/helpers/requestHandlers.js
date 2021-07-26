// import React from 'react'

const edamam_app_id = "app_id=" + process.env.REACT_APP_ID;
const edamam_api_key = "app_key=" + process.env.REACT_APP_API_KEY;
const uri = "http://localhost:5000/"

// edamam example recipe search query
// 'https://api.edamam.com/search?app_id=&app_key=&q=coffee'

const getRecipes = async (searchParams) => {
  new URLSearchParams(searchParams).toString()
  console.log(uri + "?" + new URLSearchParams(searchParams).toString())
  const response = await fetch(
    // "https://api.edamam.com/search?" +
    //   edamam_app_id +
    //   "&" +
    //   edamam_api_key +
    //   "&" +
    //   new URLSearchParams(searchParams).toString()
    uri + "?" + new URLSearchParams(searchParams).toString()
  );
  return response.json();
};

export {getRecipes};
