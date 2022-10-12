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

app.put("/update/:id", (req, res) => {
  // const { id } = req.params;
  //const { name, lastName } = req.body;
  const { id, userName, userLastName } = req.body;
  const sql = `UPDATE usuarios SET name = '${userName}', lastName='${userLastName}' WHERE usuario_id = '${id}'`;
  //const sql = `UPDATE usuarios SET lastName = "Richrdas" WHERE usuario_id = "237" `;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Customer updated!");
  });
});

//Routes

app.use("/", require("./routes/getAllusers"));
app.use("/user", require("./routes/getuser"));
// app.use("/add", require("./routes/adduser"));
// app.use("/delete/:id", require("./routes/deleteuser"));

// check conncetion
connection.connect((error) => {
  if (error) throw error;
  console.log("Server running!!");
});

app.listen(port, () => {
  console.log(`Estoy ejecutandome en el puerto ` + `${port}`);
});
