import React, {
	Component
} from 'react';
import TaskList from './TaskList'
import TaskCreatorContainer from '../containers/TaskCreatorContainer'

class App extends Component {
	render() {
		return (
			<div>
            	<TaskCreatorContainer />
                <TaskList />
            </div>
		);
	}
}

export default App