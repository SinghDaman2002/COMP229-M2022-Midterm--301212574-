// 
//   file name: Books Model
//   Student name: Damanpreet Singh
//   Student number: 301212574
//   Date : 24-06-2022  
//   App Name: My Favourite Books
//

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
