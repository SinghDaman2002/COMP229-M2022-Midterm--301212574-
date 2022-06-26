// 
//   file name: Index Routes
//   Student name: Damanpreet Singh
//   Student number: 301212574
//   Date : 24-06-2022  
//   App Name: My Favourite Books
//

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
