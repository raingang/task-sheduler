import React, {
	Component
} from 'react'
import TaskContainer from '../containers/TaskContainer'


class TaskList extends Component {
	render() {
		console.log('tasks rendered')
		const tasks = this.props.tasks
		return <section className = 'tasks'>
			<div className = 'tasks__wrapper'>
		{this.getBody(tasks)}
		</div>
		</section>
	};
	getBody(tasks) {
		return <ul className = 'tasks__list'>{tasks.map((task) => <li key = {task.id} className = 'tasks__item'><TaskContainer task = {task} /></li>)}</ul>
	}
};

export default TaskList