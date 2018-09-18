var express = require("express");
var mysql = require("mysql");
var bodyParser = require('body-parser');
var router = express.Router();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "friends_db"
});

// /submit GET
router.get("/", function(req, res) {
  res.render("pages/survey-form");
});

router.post("/take-in-survey", function(req, res) {
  var formRes = req.body;
  // console.log(formRes);
  var userArr = [];
  var dbArr = [];
  var totalDifference = 0;
  var a1 = parseFloat(formRes.q1);
  var a2 = parseFloat(formRes.q2);
  var a3 = parseFloat(formRes.q3);
  var a4 = parseFloat(formRes.q4);
  var a5 = parseFloat(formRes.q5);
  var a6 = parseFloat(formRes.q6);
  var a7 = parseFloat(formRes.q7);
  var a8 = parseFloat(formRes.q8);
  var a9 = parseFloat(formRes.q9);
  var a10 = parseFloat(formRes.q10);
  var sum = parseFloat(a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10);

  userArr.push(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);

  console.log(`user array: ${userArr}`);

  var query = connection.query(
    `SELECT * 
        FROM users`,
    function(err, data) {

      if (err) {
        console.log(err);
      } else {
        for (i in data) {
          var dbUser = data[i];
          var arr = []
          arr.push(
            dbUser.ans1,
            dbUser.ans2,
            dbUser.ans3,
            dbUser.ans4,
            dbUser.ans5,
            dbUser.ans6,
            dbUser.ans7,
            dbUser.ans8,
            dbUser.ans9,
            dbUser.ans10
          );
          dbArr.push(arr);
          // console.log(data);
          console.log(`db array: ${dbArr}`);
          var compare = totalDifference += Math.abs(parseFloat(userArr) - parseFloat(dbArr));
          console.log(compare);
        }
      }
    }
  );
  res.redirect("/survey");
});

module.exports = router;

//submit user's answers and name first and then compare
