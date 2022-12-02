const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
// const { readFromFile, readAndAppend } = require('./assets/js/notes.html');

// Helper method for generating notes
// const notes = require('develop/public/assets/notes.html');

const PORT = process.env.PORT || 8080;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);