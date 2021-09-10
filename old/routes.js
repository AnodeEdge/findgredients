const express = require("express")
const Favorites = require("../models/Favorites")
const Users = require("../models/Users")
const router = express.Router()

router.get("/", (request, response) => {
    console.log(request.query)
    response.json({ query: request.query.q });
});

router.get("/recipes", async (request, response) => {
    console.log("Request query contains: " + JSON.stringify(request.query))
    let data = await getRecipes(request.query)
    response.json(data.data)
})

// Get all posts
// router.get("/posts", async (req, res) => {
// 	const posts = await Post.find()
// 	res.send(posts)
// })

module.exports = router