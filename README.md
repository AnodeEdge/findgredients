# Findgredients

## About This Project
Findgredients is a web-app that allows users to find recipes based on ingredients that they have available.  The app uses a Recipe Search API provided by Edamam. Users will be able to refine their search results based various factors including health labels, diet labels, region, and type of meal.

### Journal
#### Log 1
Decided to make a project that allows users to find recipes based on the food they have available in their kitchen.  Discovered an API from Edamam that allows a request to their database of thousands of recipes and includes nutritional information, diet labels, and other incidental information. I built a demo request handler that used my app id and api key to request the data from the recipe search API. Decided it is not good practice to have the api key visible in the code so I used environment variables instead, however; the API key is still accessible via dev tools.
#### Log 2
Due to the API key being accessible via dev tools, I decided it would be better practice to build a back-end server using node/express to request data from the API instead.  Spent time going through tutorials to install and learn node/express.  Managed to get the frontend and backend to communicate with each other; now I need to create the request handler on the back end to communicate with the API.