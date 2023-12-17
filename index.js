const server = require("./src/server");
const { sequelize } = require("./src/db");
const PORT = 3001;

sequelize
  .sync({ force: false }) // Puedes cambiar force a false después de la primera ejecución para evitar recrear la tabla cada vez
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Product Angular Server listening in port ${PORT}...`);
    });
  })
  .catch((error) => console.error(error));
