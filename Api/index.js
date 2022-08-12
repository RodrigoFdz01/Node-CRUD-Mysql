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
app.get("/", (req, res) => {
  res.send("es un get");
});

// all users
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM usuarios";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("Not result");
    }
  });
});

app.post("/adduser", (req, res) => {
  const { userName, userLastName } = req.body;
  // console.log(userName);
  const sql = `INSERT INTO usuarios (name , lastName) VALUES ('${userName}', '${userLastName}')`;
  // const customer = {
  //   userName: req.body.userName,
  //   userLastName: req.body.userLastName,
  // };

  // no es necesario pasar customer si ya pase los datos por la const sql...
  connection.query(sql, customer, (error) => {
    if (error) throw error;
    res.send("Customer created!!!");
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName } = req.body;
  const sql = `DELETE FROM usuarios WHERE usuario_id = ${id}`;
  // otra opcion
  //const sql = `DELETE FROM usuarios WHERE usuario_id > '5'`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Customer deleted");
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  //const { name, lastName } = req.body;
  const { userName, userLastName } = req.body;

  const sql = `UPDATE usuarios SET name = '${userName}', lastName='${userLastName}' WHERE usuario_id =${id}`;
  //const sql = `UPDATE usuarios SET lastName = "Richrdas" WHERE usuario_id = "237" `;

  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Customer updated!");
  });
});

// check conncetion

connection.connect((error) => {
  if (error) throw error;
  console.log("Server running!!");
});

app.listen(port, () => {
  console.log(`Estoy ejecutandome en el puerto ` + `${port}`);
});
