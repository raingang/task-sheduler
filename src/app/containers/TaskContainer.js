import React, {
	Component
} from 'react'
import Task from '../components/Task'
import {
	connect
} from 'react-redux'
import {
	completeTask,
	deleteTask,
	editorMode,
} from '../AC'

class TaskContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			toolsOpen: false,
		}
		this.handleCheckBox = this.handleCheckBox.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleOpenTools = this.handleOpenTools.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
	}

	render() {
		return (<Task handleEdit = {this.handleEdit} toolsOpen = {this.state.toolsOpen} handleOpenTools = {this.handleOpenTools} handleDelete = {this.handleDelete} handleCheckBox = {this.handleCheckBox} task = {this.props.task} />)
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

	handleEdit(event){
		this.props.editorMode(this.props.task)		
	}

	handleOpenTools(event) {
		this.setState({
			toolsOpen: !this.state.toolsOpen
		})
	}
}

// Для того, чтобы при изменении состояния creator, вызывался render у task.
// Грязный хак ><
const mapStateToProps = state => ({ creator: state.creator })

export default connect(mapStateToProps, {
	completeTask,
	deleteTask,
	editorMode
})(TaskContainer)