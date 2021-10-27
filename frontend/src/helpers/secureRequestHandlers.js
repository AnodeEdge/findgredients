const baseURI = "http://localhost:5000/"

const postFavorite = async (params) => {
    const authParams = new URLSearchParams(params)
    const URI = baseURI + "" + "?" + authParams.toString()
    const response = await fetch(URI, {method: 'POST'});
    const responseData = response.json().then((data) => data)
    return responseData
}

export {postFavorite}