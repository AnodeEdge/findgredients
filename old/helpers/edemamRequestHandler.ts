const axios = require("axios");

// const edamam_app_id = "app_id=" + process.env.REACT_APP_ID;
// const edamam_api_key = "app_key=" + process.env.REACT_APP_API_KEY;

const edamamAPI = {
  app_id: "adf318f9",
  app_key: "246ca4737cfa9f606088ce77431a86ee",
  type: "public"
}

const sanitizeRecipeSearchParams = (searchParams: any) => {
  const healthParams = Array.isArray(searchParams.health) ? searchParams.health : [searchParams.health]
  const dietParams = Array.isArray(searchParams.diet) ? searchParams.diet : [searchParams.diet]
  delete searchParams.health
  delete searchParams.diet
  const revisedParams = new URLSearchParams(searchParams)
  if (Array.isArray(healthParams) && typeof healthParams[0] !== 'undefined' ) {
    for (let i = 0; i < healthParams.length; i++) {
      revisedParams.append("health", healthParams[i])
    }
  }
  if (Array.isArray(dietParams) && typeof dietParams[0] !== 'undefined') {
    for (let i = 0; i < dietParams.length; i++) {
      revisedParams.append("diet", dietParams[i])
    }
  }
  return revisedParams
}

const buildQueryString = (params: any) => {
  return Object.keys(params).map(key => key + '=' + params[key]).join('&');
}

const buildEndpoint = (params: any, accessPoint = " https://api.edamam.com/api/recipes/v2") => {
  // return accessPoint + "?" + buildQueryString(edamamAPI) + "&" + buildQueryString(params)
  // console.log(accessPoint + "?" + buildQueryString(edamamAPI) + "&" + sanitizeRecipeSearchParams(params))
  return accessPoint + "?" + buildQueryString(edamamAPI) + "&" + sanitizeRecipeSearchParams(params)
}

const getRecipes = async (params: any) => {
  // console.log(params)
  try {
    let data = await axios.get(buildEndpoint(params))
    // console.log(data.data)
    console.log("Successfully retrieved recipes")
    return data;
  } catch (error) {
    console.log("error", error)
  }
}

// const getNextRecipes = async (params: any) => {
//   try {
//     console.log("------")
//     console.log(params)
//   } catch (error) {
//     console.log("error", error)
//   }
// }

export { getRecipes };