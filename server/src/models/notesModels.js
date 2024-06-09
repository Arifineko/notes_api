const db = require('../config/database')

const getAllNotes = () => {
    const SQLQuery = 'SELECT * FROM notes'
    return db.execute(SQLQuery)
}

const getNoteById = (id) => {
    const SQLQuery = `SELECT * FROM notes WHERE id=?`
    return db.execute(SQLQuery, [id])
}

const createNewNote = (body) => {
    const SQLQuery = `INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)`
    return db.execute(SQLQuery, [body.title, body.datetime, body.note])
}

const deleteNote = (id) => {
    const SQLQuery = `DELETE FROM notes WHERE id=?`
    return db.execute(SQLQuery, [id])
}

const updateNote = (body, id) => {

    const SQLQuery = ` UPDATE notes SET title=?, datetime=?, note=? WHERE id=?`

    return db.execute(SQLQuery, [body.title, body.datetime, body.note, id])
}

module.exports = {
    getAllNotes,
    getNoteById,
    createNewNote,
    deleteNote,
    updateNote
}