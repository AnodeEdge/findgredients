const baseURI = "http://localhost:5000/"

const requestAuth = async (authType = "login", params) => {
    const authParams = new URLSearchParams(params)
    const URI = baseURI + authType + "?" + authParams.toString()
    const response = await fetch(URI, {method: 'POST'});
    const responseData = response.json().then((data) => data)
    return responseData
}

export {requestAuth}


