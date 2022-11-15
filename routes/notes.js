
const nts = require('express').Router();
const { readAndAppend } = require('../helpers/fsHelp');
const uuid = require('../helpers/uuid');

nts.get('/', (req, res) => 
readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)))
);

nts.post('/', (req, res) => {

    const {title, text} = req.body;

    if (title && text) {
        const newNote = {
            id: uuid(),
            title,
            text,
        };

        readAndAppend(newNote, './db/db.json' );

        const response = { 
            status : 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting');
    }
    });

    module.exports = nts;