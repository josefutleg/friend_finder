var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
var methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

var homePageRoutes = require('./routes/home.js');

app.use('/home', homePageRoutes);

var surveyPageRoutes = require('./routes/survey.js');

app.use('/survey', surveyPageRoutes);

app.listen(3001);