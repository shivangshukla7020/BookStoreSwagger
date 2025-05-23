const books = require('../models/bookModel');
const fs = require('fs');

const addBook = (req, res)=>{
    const book = {id : books.length+1, ...req.body};
    books.push(book);
    res.status(201).json(book);
}

const updateBook = (req, res)=>{
    const index = books.findIndex(b => b.id == req.body.id);
    if(index == -1) return res.status(404).json({message : 'Book not found'});
    books[index] = req.body;
    res.json(req.body);
}

const getBookById = (req, res)=>{
    const book = books.find(b => b.id == req.params.bookId);
    if(!book) return res.status(404).json({message : 'Book not found'});
    res.json(book);
}

const deleteBook = (req, res)=>{
    const index = books.findIndex(b => b.id == req.params.bookId);
    if(index == -1) return res.status(404).json({message : 'book not found'});
    books.splice(index,1);
    res.json({message : 'Book deleted successfully'}); 
}

const findByStatus = (req, res)=>{
    const status = req.query.status;
    const filtered = books.filter(b => b.status === status);
    res.json(filtered);
}

const updateBookForm = (req, res)=>{
    const {name, status} = req.body;
    const book = books.find(b => b.id == req.params.bookId);
    if(!book) return res.status(404).json({message : 'Book not found'});
    book.name = name;
    book.status = status;
    res.json(book);
}

const uploadImage = (req, res)=>{
    if(!req.file) return res.status(400).json({message : 'No file uploaded'});
    const book = books.find(b => b.id == req.params.bookId);
    if(!book) return res.status(404).json({message: 'Book not found'});
    book.image = `/uploads/${req.file.filename}`;
    res.json({message : 'Image uploaded', path: book.image});
}

module.exports = {addBook, updateBook, getBookById, deleteBook, findByStatus, updateBookForm, uploadImage};