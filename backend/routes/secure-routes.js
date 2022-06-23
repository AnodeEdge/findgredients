const express = require('express');
const UserModel = require('../model/Users');
const FavoriteModel = require('../model/Favorites')
const router = express.Router();

router.get(
  '/profile',
  (req, res, next) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token,
    })
  }
);

router.post(
  '/addfavorite',
  async (req, res, next) => {
    try {
      const href = req.query.href
      const title = req.query.title
      const image = req.query.image
      const favorite = { "href": href, "title": title, "image": image }
      const user = await UserModel.findOneAndUpdate({ email: req.user.email }, 
        { $addToSet: { "favorites": favorite } }, 
        { new: true })
      console.log(user)
      res.json({
        message: "Success"
      })
    } catch (error) {
      console.log(error)
      res.json({
        message: "Failed to add favorite"
      })
    }
  }
)

router.post(
  '/removefavorite',
  async (req, res, next) => {
    try {
      const href = req.query.href
      const user = await UserModel.findOneAndUpdate( {email: req.user.email },
      { $pull: { "favorites": {"href": href} } },
      { new: true})
      console.log(user)
      res.json({
        message: "Success"
      })
    } catch (error) {
      console.log(error)
      res.json({
        message: "Failed to remove favorite"
      })
    }
  }
)

router.get(
  '/favorites',
  async (req, res, next) => {
    const user = await UserModel.findOne({ email: req.user.email})
    console.log(user)
    res.json(
      user.favorites
    )
  }
)

module.exports = router;