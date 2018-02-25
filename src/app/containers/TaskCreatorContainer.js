import React, {
	Component
} from 'react'
import {
	addTask,
	editTask,
} from '../AC'
import {
	connect
} from 'react-redux'
import TaskCreator from '../components/TaskCreator'
import { CREATOR_MODE, EDITOR_MODE} from '../constants'


class TaskCreatorContainer extends Component {
	constructor(props) {
		super(props)
		const {title = '', text = '', endDate = null} = props.creator
		this.state = {
			title: title,
			text: text,
			endDate: endDate,
			focusedDatesInput: null
		}

		this.handleTitleChange = this.handleTitleChange.bind(this)
		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleDateChange = this.handleDateChange.bind(this)
		this.handleDatesInput = this.handleDatesInput.bind(this)
	}
	render() {
		console.log(this.state.endDate)
		return (
			<TaskCreator handleOpen = {this.handleOpen}
      handleTitleChange = {this.handleTitleChange}
      handleTextChange = {this.handleTextChange}
      handleClick = {this.handleClick}
      title = {this.state.title}
      text = {this.state.text}
      focusedDatesInput = {this.state.focusedDatesInput}
      endDate = {this.state.endDate}
      handleDateChange = {this.handleDateChange}
      handleDatesInput = {this.handleDatesInput}
      />
		)
	}

	handleTitleChange(event) {
		this.setState({
			title: event.target.value
		})
	}

	handleTextChange(event) {
		this.setState({
			text: event.target.value
		})
	}

	handleClick(event) {
		const {
			title,
			text,
			endDate
		} = this.state
		const {
			addTask,
			editTask
		} = this.props
		let task = {
			title,
			text,
			endDate
		}
		Object.keys(this.props.creator).length ? editTask(Object.assign(this.props.creator, task, {editDate: Date.now()})) : addTask(task) 
		this.setState({
			title: '',
			text: '',
			endDate: null,
		})
	}


	handleDateChange({
		endDate
	}) {
		this.setState({
			endDate
		})
	}

	handleDatesInput(focusedDatesInput) {
		this.setState({
			focusedDatesInput
		})
	}

}

const mapStateToProps = (state) => ({
	creator: state.creator
})

export default connect(mapStateToProps, {addTask, editTask})(TaskCreatorContainer)