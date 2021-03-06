import uuid from 'node-uuid'
import alt from '../libs/alt.js'
import NoteActions from '../actions/NoteActions'

class NoteStore {
    constructor() {
        this.bindActions(NoteActions)

        this.notes = []

        this.exportPublicMethods({
            get: this.get.bind(this)
        })
    }

    create(note) {
        const notes = this.notes
        note.id = uuid.v4()

        this.setState({
            notes: notes.concat(note)
        })
    }

    update({id,  task}) {
        let notes = this.notes;
        const noteIndex = this.findNote(id)

        if (noteIndex < 0) {
            return
        }

        notes[noteIndex].task = task;
        this.setState({notes})
    }

    findNote(id) {
        const notes = this.notes
        const noteIndex = notes.findIndex((note) => note.id === id)

        if (noteIndex < 0) {
            console.warn('Failed to find note', notes, id);
        }

        return noteIndex
    }

    delete(id) {
        const notes = this.notes
        const noteIndex = this.findNote(id)

        if (noteIndex < 0) {
            return
        }

        this.setState({
            notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
        })
    }

    get(ids = []) {
        return ids.map((id) => this.notes[this.findNote(id)])
                  .filter((note) => note)
    }
}

export default alt.createStore(NoteStore, 'NoteStore')
