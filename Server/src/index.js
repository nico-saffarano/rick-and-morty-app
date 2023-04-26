//EJERCICIO 2 - RUTA

const http = require("http");
const { getCharByID } = require("./controllers/getCharById"); //1.importo getCharById

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character")) {
      //2.creo el condicional
      const id = req.url.split("/").at(-1);
      getCharByID(res, +id);
    }
  })
  .listen(3001);

  //const id = req.url.split("/").at(-1);
  //split ->toma la url y la divide en segmentos por cada barra '/'
  //el resultado es un array con cada segmento guardado en una posicion del array
  //at-> me permite tomar el elemento especifico que esta en la posicion que paso por argumento
  
  //getCharByID(res, +id);
  //+id -> el id que resulta es un string, por lo que lo parseo agregando un + antes
  //otras formas de parsear -> parseInt(id) o Number(id)
