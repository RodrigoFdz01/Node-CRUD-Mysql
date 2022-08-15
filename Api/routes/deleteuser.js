const router = require("express").Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "prueba",
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  // const { name, lastName } = req.body;
  const sql = `DELETE FROM usuarios WHERE usuario_id = ${id}`;
  // otra opcion
  //const sql = `DELETE FROM usuarios WHERE usuario_id > '5'`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Customer deleted");
  });
});

module.exports = router;
