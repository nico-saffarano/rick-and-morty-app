const { getCharByID } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { login } = require("../controllers/login");

// importo la funcion Router de express
const router = require('express').Router();

router.get('/character/:id',(req,res) => {
  getCharByID(req,res);
});

router.get('/login',(req,res) => {
  login(req,res);
});

router.post('/fav',(req,res) => {
  postFav(req,res);
});

router.delete('/fav/:id',(req,res) => {
  deleteFav(req,res);
});

module.exports = {
  router,
};