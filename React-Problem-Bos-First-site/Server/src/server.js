const app = require("./index");
require("dotenv").config();

const connect = require("./Configs/db");

const port = process.env.port || 8082;

app.listen(port, async () => {
  try {
    await connect();
    console.log("I'm Listening on port 8082");
  } catch (e) {
    console.log("e:", e.message);
  }
});
