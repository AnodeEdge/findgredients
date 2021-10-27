const express = require('express')
const cors = require('cors')
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const User = require('./model/Users')
const Favorite = require('./model/Favorites')
require('./auth/auth');
const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

const app = express();
const port = 5000;

app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use('/', routes)
dbConnect().catch(err => console.log(err))

async function dbConnect() {
  await mongoose.connect('mongodb://localhost:27017/findgredients')
  mongoose.connection.on('error', error => console.log(error) )
  mongoose.Promise = global.Promise
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log("Database Connection Successful!")
})

app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

//Error handling
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(port, () =>
  console.log(`Findgredient API listening on port ${port}`)
);
