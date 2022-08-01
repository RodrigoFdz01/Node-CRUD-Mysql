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
  const { name, lastName } = req.body;
  console.log(req.body);
  // const sql = `INSERT INTO usuarios (name , lastName) VALUES ('${name}', '${lastName}')`;
  const sql = `INSERT INTO usuarios (name , lastName) VALUES ('Keith', 'RICHARDS')`;
  const customer = {
    name: req.body,
    lastName: req.body,
  };
  connection.query(sql, customer, (error) => {
    if (error) throw error;
    res.send("Customer created!!");
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName } = req.body;
  const sql = `UPDATE usuarios SET name = '${name}', lastName='${lastName}' WHERE usuario_id =${id}`;

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
  console.log(`estoy ejecutandome en el puerto ` + `${port}`);
});
