const axios = require("axios");
const accessPoint = " https://api.edamam.com/api/recipes/v2"

// const edamam_app_id = "app_id=" + process.env.REACT_APP_ID;
// const edamam_api_key = "app_key=" + process.env.REACT_APP_API_KEY;

const edamamAPI = {
  app_id: "adf318f9",
  app_key: "246ca4737cfa9f606088ce77431a86ee",
  type: "public"
}

const buildQueryString = (params) => {
  return Object.keys(params).map( key => key + '=' + params[key]).join('&'); 
}

const buildEndpoint = (params) => {
  return accessPoint + "?" + buildQueryString(edamamAPI) + "&" + buildQueryString(params)
}

const getRecipes = async (params) => {
    try {
      let data = await axios.get(buildEndpoint(params))
      return data;
    } catch (error) {
      console.log("error", error)
    }
  }

module.exports = {getRecipes};