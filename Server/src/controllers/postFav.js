const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ message: 'Faltan datos' });
    }

    const [favorite, created] = await Favorite.findOrCreate({
      where: { name },
      defaults: {
        origin,
        status,
        image,
        species,
        gender
      }
    });

    const favorites = await Favorite.findAll();

    res.status(200).json({ favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { postFav };
