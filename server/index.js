const server = require("./src/server");
const { conn } = require("./src/db.js");
const getApiHandler = require("./src/handlers/getApi.js");
const PORT = 3001;

conn
  .sync({ force: true })                                      // drop and recreate tables id they already exist
  .then(() => {                                               // promise executed after de sync is successful
    server.listen(PORT, async () => {                         // listens port and executes a cb once the server starts
      await getApiHandler();                                  // fn runs only when the server has started successfully
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
