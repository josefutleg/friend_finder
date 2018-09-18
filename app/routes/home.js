var express = require("express");
var mysql = require("mysql");
var router = express.Router();

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "res_db"
// });

// /submit GET
router.get("/", function(req, res) {
  res.render("pages/home");
});

// router.get('/survey', function(req, res) {
//   console.log(req)
//   res.render('../survey-form');
// })

module.exports = router;
