const router = require("express").Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "prueba",
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `select * from usuarios where usuario_id = ${id}`;
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("Not result");
    }
  });
});

module.exports = router;
