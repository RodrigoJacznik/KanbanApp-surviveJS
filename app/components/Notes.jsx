import React, {Component} from 'react'
import Editable from './Editable'

class Notes extends Component {
    constructor (props) {
        super(props)

        this.renderNote = this.renderNote.bind(this)
    }

    render () {
        const notes = this.props.items

        return <ul className="notes">{notes.map(this.renderNote)}</ul>
    }

    renderNote (note) {
        return (
            <li className="note" key={`note${note.id}`}>
                <Editable
                    value={note.task}
                    onEdit={this.props.onEdit.bind(null, note.id)}
                    onDelete={this.props.onDelete.bind(null, note.id)} />
            </li>
        )
    }
}

export default Notes
