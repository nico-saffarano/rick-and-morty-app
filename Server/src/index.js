const { conn } = require("./DB_connection");
const server = require("./app");
const PORT = 3001;



  server.listen(PORT, async () => {
    await conn.sync({force:true})
    console.log("Server raised in port: " + PORT);
  });

module.exports = { server };
