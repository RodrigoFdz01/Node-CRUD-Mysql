const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const bodyparser = require("body-parser");

const port = process.env.PORT || 3000;
app.use(bodyparser.json());

//#region
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  express.json({
    type: "*/*",
  })
);
//#endregion

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "prueba",
});

//Routes
const routes = require("./routes/index.routes.js");
app.use(routes);

// app.use("/", require("./routes/getAllusers"));
// app.use("/users", require("./routes/getuser"));
// app.use("/users", require("./routes/adduser"));
// app.use("/delete", require("./routes/deleteuser"));

// check conncetion
connection.connect((error) => {
  if (error) throw error;
  console.log("Server running!!");
});

app.listen(port, () => {
  console.log(`Estoy ejecutandome en el puerto ` + `${port}`);
});
