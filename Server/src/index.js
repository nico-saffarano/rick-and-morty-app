const http = require("http");
const data = require("./utils/data.js");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      const idFiltered = data.find((char) => {
        return char.id == id;
      });
      return res
      .writeHead(200,{'Content-type':'application/json'})
      .end(JSON.stringify(idFiltered))
    }
  })
  .listen(3001);
