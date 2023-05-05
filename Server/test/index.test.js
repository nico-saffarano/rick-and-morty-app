const app = require("../src/app");
const session = require("supertest");
const request = session(app);

const character = {
  id: 1,
  name: "Rick Sanchez",
  gender: "Male",
  species: "Human",
  origin: {
    name: "Earth (C-137)",
  },
  image: "image.png",
  status: "Alive",
};
describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await request.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await request.get("/rickandmorty/character/1");

      for (const prop in character) {
        expect(response.body).toHaveProperty(prop);
      }
    });

    it("Si hay un error responde con status: 500", async () => {
      const response = await request.get("/rickandmorty/character/3200j");
      expect(response.statusCode).toBe(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    const access = { access: true };
    it("Responde con la propiedad access en true si la informacion del usuario es valida", async () => {
      const response = await request.get(
        "/rickandmorty/login?email=isaac1@gmail.com&password=1234567"
      );
      expect(response.body).toEqual(access);
    });

    it("Responde con la propiedad access en false si la informacion del usuario no es valida", async () => {
      const response = await request.get(
        "/rickandmorty/login?email=isaac5@gmail.com&password=12ery567"
      );
      access.access = false;
      expect(response.body).toEqual(access);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Debe guardar al personaje en favoritos", async () => {
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body).toContainEqual(character);
    });

    it("Debe guardar al personaje en favoritos sin eliminar a los que se añadieron anteriormente", async () => {
      (character.id = 2), (character.name = "Morty Smith");

      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body.length).toBe(2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID solicitado no existe, deberia retornar un arreglo con todos los favoritos", async () => {
      const response = await request.delete("/rickandmorty/fav/35j");
      expect(response.body.length).toBe(2);
    });

    it("Si el ID solicitado existe, deberia eliminarlo favoritos", async () => {
      const response = await request.delete("/rickandmorty/fav/2");
      expect(response.body.length).toBe(1);
    });
  });
});
