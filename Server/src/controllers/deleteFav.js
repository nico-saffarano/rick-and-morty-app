const { Favorite } = require('../models/Favorite');

const deleteFav = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedFav = await Favorite.destroy({
      where: {
        id: id
      }
    });
    const favs = await Favorite.findAll();
    res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteFav;
