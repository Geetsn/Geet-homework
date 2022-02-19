const express = require("express");
const logger = require("morgan");
const cohortsRouter = require('./routes/cohorts.js');

const app = express();

app.use(logger("dev"));

app.use('/cohorts', cohortsRouter)

app.get("/", (request, response) => {
  response.send("<h1>Super Team Picker<h1>");
});

const PORT = 3000;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
  console.log(`Server is listening on http://${DOMAIN}:${PORT}\nCtrl+c to end server`);
});
