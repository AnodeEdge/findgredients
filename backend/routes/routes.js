const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const requestHandler = require('../helpers/edemamRequestHandler')

router.post(
    '/signup',
    passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
      console.log(req.user)
      res.json({
        message: 'Signup successful',
        user: req.user
      });
    }
  );

router.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return next(error);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, 'TOP_SECRET');

              return res.json({ token });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

router.get("/", (request, response) => {
  console.log(request.query)
  response.json({ query: request.query.q });
});

router.get("/recipes", async (request, response) => {
  console.log("Request query contains: " + JSON.stringify(request.query)) 
  let data = await requestHandler.getRecipes(request.query)
  response.json(data.data)
})

router.get("/test" , async (request, response) => {
  const doc = new User({email: "test"})
  doc.save()
  response.json({status: 200})
})

module.exports = router;