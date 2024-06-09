const express = require('express')
const { getAllNotes, getNoteById, createNewNote, deleteNote, updateNote } = require('../controllers/notes')

const router = express.Router()

// GET - GET all notes
router.get('/', getAllNotes)

//GET - GET note by id

router.get('/:id', getNoteById)

//POST - CREATE new note

router.post('/', createNewNote)

//DELETE - DELETE note

router.delete('/:id', deleteNote)

//PUT - UPDATE note

router.put('/:id', updateNote)

module.exports = router



