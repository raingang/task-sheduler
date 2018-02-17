import React, {
	Component
} from 'react'
import Task from '../components/Task'
import {
	connect
} from 'react-redux'
import {
	completeTask
} from '../AC'

class TaskContainer extends Component {
	constructor(props) {
		super(props)
		this.handleCheckBox = this.handleCheckBox.bind(this)
	}

	render() {
		return (<Task handleCheckBox = {this.handleCheckBox} task = {this.props.task} />)
	}

	handleCheckBox() {
		const {
			completeTask,
			task
		} = this.props
		completeTask(task.id)
	}
}

export default connect(null, {
	completeTask
})(TaskContainer)