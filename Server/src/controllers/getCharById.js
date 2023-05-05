/*getCharById v1
 const axios = require("axios");

const getCharByID = (res, id) => { //1.creo la funcion
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`) //2.peticion a la API
    .then((response) => response.data)
    .then(({ name, gender, species, origin, image, status }) => { //destructuro data
      const character = { //3.creo el objeto con las propiedades
        id,
        name,
        gender,
        species,
        origin: origin.name,
        image,
        status,
      };
      return res //4. respuesta en JSON del personaje obtenido 
        .writeHead(200, { "Content-type": "applicatio/json" })
        .end(JSON.stringify(character));
    })
    .catch((error) => { //5. manejo el posible error con catch
      return res
        .writeHead(500, { "Content-type": "text/plain" })
        .end(error.message);
    });
};

module.exports = {
  getCharByID,
}; */

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharByID = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);
    if (!data.name) throw new Error(`ID ${id} Not found`);
    const characters = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };
    return res.status(200).json(characters);
  } catch (error) {
    return error.message.includes("ID")
      ? response.status(404).send(error.message)
      : response.status(500).send(error.message);
  }
};

module.exports = {
  getCharByID,
};
