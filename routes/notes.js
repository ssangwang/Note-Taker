
const nts = require('express').Router();
const { readAndAppend } = require('../helpers/fsHelp');
const uuid = require('../helpers/uuid');

nts.get('/', (req, res) => 
readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)))
);

