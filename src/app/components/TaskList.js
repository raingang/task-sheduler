import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import TaskContainer from '../containers/TaskContainer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants'

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return tasks
    case SHOW_COMPLETED:
      return tasks.filter(t => t.completed)
    case SHOW_ACTIVE:
      return tasks.filter(t => !t.completed)
  }
}


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
	tasks: getVisibleTasks(state.tasks, state.visibilityFilter),
});

export default connect(mapStateToProps)(TaskList);