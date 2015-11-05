import AltContainer from 'alt-container'
import React, {Component} from 'react'
import Lanes from './Lanes.jsx'
import LaneActions from '../actions/LaneActions'
import LaneStore from '../stores/LaneStore'


class App extends Component {
    render () {
        return (
            <div>
                <button className="add-lane" onClick={this.addItem}>+</button>
                <AltContainer
                    stores={[LaneStore]}
                    inject={{ items: () => LaneStore.getState().lanes || [] }}>

                    <Lanes />
                </AltContainer>
            </div>
        )
    }

    addItem() {
        LaneActions.create({name: 'New lane'})
    }
}

export default App
