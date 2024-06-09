
const modelsNotes = require('../models/notesModels')

const getAllNotes = async (req, res) => {
    try {
        const [data] = await modelsNotes.getAllNotes()
        res.json({
            message: 'success GET all notes',
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'failed GET all notes',
            serverMessage: error
        })
    }
}

const getNoteById = async (req, res) => {
    const { id } = req.params
    try {
        const [data] = await modelsNotes.getNoteById(id)
        res.json({
            message: 'success GET note by id',
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'failed GET note by id',
            serverMessage: error
        })
    }
}

const createNewNote = async (req, res) => {
    const { body } = req
    try {
        await modelsNotes.createNewNote(body)

        res.status(201).json({
            message: 'success CREATE note',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'failed CREATE note by id',
            serverMessage: error
        })
    }
}

const deleteNote = async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        await modelsNotes.deleteNote(id)

        res.json({
            message: 'success DELETE note',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'failed DELETE note',
            serverMessage: error
        })
    }
}

const updateNote = async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        await modelsNotes.updateNote(body, id)
        res.status(201).json({
            message: 'success UPDATE note',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'failed UPDATE note',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllNotes,
    getNoteById,
    createNewNote,
    deleteNote,
    updateNote
}