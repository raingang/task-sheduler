import React, {
	Component
} from 'react';
import TaskList from './TaskList'
import Navigation from './Navigation'
import TaskCreatorContainer from '../containers/TaskCreatorContainer'
import {connect} from 'react-redux'


class App extends Component {
	getCreator(){
		return this.props.creator ? <TaskCreatorContainer /> : null
	}
	render() {
		return (
			<div>
				<Navigation />
            	{this.getCreator()}
                <TaskList />                
            </div>
		);
	}
}

export default App