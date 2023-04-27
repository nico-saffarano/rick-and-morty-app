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

const getCharByID = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}/${id}`)
    .then((response) => response.data)
    .then(({ status, name, species, origin, image, gender }) => {
      if (name) {
        const character = {
          id,
          image,
          name,
          species,
          origin: origin.name,
          status,
          gender,
        };
        return res.json(character);
      }
      return res.status(404).send("Not found");
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

module.exports = {
  getCharByID,
};
