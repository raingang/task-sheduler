import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import TaskContainer from '../containers/TaskContainer'

class TaskList extends Component {
	render() {
		const tasks = this.props.tasks;
		return <div className = 'tasks'>
			<div className = 'tasks__wrapper'>
		{this.getBody(tasks)}
		</div>
		</div>
	};

	getBody(tasks) {
		return <ul className = 'tasks__list'>{tasks.map((task) => <li key = {task.id} className = 'tasks__item'><TaskContainer task = {task} /></li>)}</ul>
	}
};

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);