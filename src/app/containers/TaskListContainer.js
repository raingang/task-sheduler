import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants'
import TaskList from '../components/TaskList'

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

class TaskListContainer extends Component {
	render() {
		return <TaskList tasks = {this.props.tasks} />
	}
}

const mapStateToProps = (state) => ({
	tasks: getVisibleTasks(state.tasks.reverse(), state.visibilityFilter),
});

export default connect(mapStateToProps)(TaskListContainer);