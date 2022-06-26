// 
//   file name: Books routes
//   Student name: Damanpreet Singh
//   Student number: 301212574
//   Date : 24-06-2022  
//   App Name: My Favourite Books
//

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const books = require('../models/books');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
    // find all books in the books collection
    book.find((err, books) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('books/index', {
                title: 'Books',
                books: books
            });
        }
    });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    const empty_book = new book({
        "Title": "",
        "Author": "",
        "Description": "",
        "Genre": "",
        "Price": ""
    });
    res.render('books/details', {
        title: 'Add New Book To Favourite Books List',
        books: empty_book
    });

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    const new_book = new book({
        "Title": req.body.title,
        "Author": req.body.author,
        "Genre": req.body.genre,
        "Price": req.body.price,
    });
    book.create(new_book, (err) => {
        if (err) {
            return console.error(err);
        } else {
            res.redirect("/books");
        }
    });

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    const search_id = req.params.id;
    books.findById({ _id: search_id }, function(err, resultBook) {
        if (err) {
            return console.error(err);
        } else {
            res.render('books/details', {
                title: 'Edit Book From Favourite Books List',
                books: resultBook
            });
        }
    });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    const edit_book = new book({
        "_id": req.params.id,
        "Title": req.body.title,
        "Author": req.body.author,
        "Genre": req.body.genre,
        "Price": req.body.price,
    });
    const search_id = req.params.id;
    books.update({ _id: search_id }, edit_book, function(err) {
        if (err) {
            return console.error(err);
        } else {
            res.redirect("/books");
        }
    });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    const search_id = req.params.id;
    books.remove({ _id: search_id }, function(err) {
        if (err) {
            return console.error(err);
        } else {
            res.redirect("/books");
        }
    });
});


module.exports = router;