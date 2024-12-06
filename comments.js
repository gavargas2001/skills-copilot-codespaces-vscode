// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Load module
const comments = require('./comments');

// Display all comments
app.get('/', (req, res) => {
  res.status(200).json(comments);
});

// Display a comment by id
app.get('/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found');
  } else {
    res.status(200).json(comment);
  }
});

// Display a comment by author
app.get('/author/:author', (req, res) => {
  const comment = comments.filter(c => c.author === req.params.author);
  if (comment.length === 0) {
    res.status(404).send('The author with the given name was not found');
  } else {
    res.status(200).json(comment);
  }
});

// Display a comment by date
app.get('/date/:date', (req, res) => {
  const comment = comments.filter(c => c.date === req.params.date);
  if (comment.length === 0) {
    res.status(404).send('The date with the given date was not found');
  } else {
    res.status(200).json(comment);
  }
});

// Display a comment by text
app.get('/text/:text', (req, res) => {
  const comment = comments.filter(c => c.text === req.params.text);
  if (comment.length === 0) {
    res.status(404).send('The text with the given text was not found');
  } else {
    res.status(200).json(comment);
  }
});

// Display a comment by date
app.get('/date/:date', (req, res) => {
  const comment = comments.filter(c => c.date === req.params.date);
  if (comment.length === 0) {
    res.status(404).send('The date with the given date was not found');
  } else {
    res.status(200).json(comment);
  }
});



/* // Display a comment by rating
app.get('/rating/:rating', (req, res) => {
  const comment = comments.filter(c => c.rating === parseInt(req.params.rating));
  if (comment.length === 0) { 
    //fix the error
 */