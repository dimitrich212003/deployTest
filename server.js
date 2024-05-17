const routes = require("./routes/routes.js");

const express = require("express");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");

//Express необходимо использовать body-parser и преобразовывать данные в формат JSON.
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

routes(app);

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});
