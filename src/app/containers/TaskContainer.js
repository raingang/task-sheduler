import React, {
	Component
} from 'react'
import Task from '../components/Task'
import {
	connect
} from 'react-redux'
import {
	completeTask,
	deleteTask
} from '../AC'

class TaskContainer extends Component {
	constructor(props) {
		super(props)
		this.handleCheckBox = this.handleCheckBox.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	render() {
		return (<Task handleDelete = {this.handleDelete} handleCheckBox = {this.handleCheckBox} task = {this.props.task} />)
	}

	handleCheckBox() {
		const {
			completeTask,
			task
		} = this.props
		completeTask(task.id)
	}

	handleDelete(event) {
		const {
			task,
			deleteTask
		} = this.props
		deleteTask(task.id)
	}
}

export default connect(null, {
	completeTask,
	deleteTask
})(TaskContainer)