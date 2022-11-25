const router = require("express").Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "prueba",
});
router.post("/", (req, res) => {
  const { userName, userLastName } = req.body;
  console.log(req.body);
  const sql = `INSERT INTO usuarios (name , lastName) VALUES ('${userName}', '${userLastName}')`;
  // const customer = {
  //   userName: req.body.userName,
  //   userLastName: req.body.userLastName,
  // }
  // no es necesario pasar customer si ya pase los datos por la const sql...
  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Customer created!!!");
  });
});

module.exports = router;
