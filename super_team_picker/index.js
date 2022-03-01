const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const cohortsRouter = require("./routes/cohorts.js");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true }));


app.use(
  methodOverride((req, res) => {
    if (req.body && req.body._method) {
      const method = req.body._method;
      return method;
    }
  })
);



app.set("view engine", "ejs");
app.set("views", "views");

app.use("/cohorts", cohortsRouter);

app.get("/", (request, response) => {
  response.redirect("/cohorts");
});

const PORT = 3000;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
  console.log(
    `Server is listening on http://${DOMAIN}:${PORT}\nCtrl+c to end server`
  );
});
