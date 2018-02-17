import React, {
	Component
} from 'react'
import {
	addTask
} from '../AC'
import {
	connect
} from 'react-redux'
import TaskCreator from '../components/TaskCreator'

class TaskCreatorContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
			title: '',
			text: '',
			tags: []
		}
		this.handleTitleChange = this.handleTitleChange.bind(this)
		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
		this.handleTags = this.handleTags.bind(this)
	}
	render() {
		return (
			<TaskCreator handleOpen = {this.handleOpen}
      handleTitleChange = {this.handleTitleChange}
      handleTextChange = {this.handleTextChange}
      handleClick = {this.handleClick}
      handleTags = {this.handleTags}
      isOpen = {this.state.isOpen}
      title = {this.state.title}
      text = {this.state.text}
      tags = {this.state.tags}
      />
		)
	}

	handleTags(event) {
		const value = event.target.value
		const {
			tags
		} = this.state
		const index = tags.indexOf(value)
		let newTags
		if (index == -1) {
			newTags = tags.concat(value)
		} else {
			newTags = tags.slice(0, index).concat(tags.slice(index + 1, tags.length))
		}
		this.setState({
			tags: newTags
		})
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
			tags
		} = this.state
		const {
			addTask
		} = this.props
		event.preventDefault()
		let task = {
			title,
			text,
			tags
		}
		addTask(task)
		this.setState({
			title: '',
			text: ''
		})
	}

	handleOpen(event) {
		event.preventDefault()
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

}



const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (task) => {
			dispatch(addTask(task))
		}
	}
}

export default connect(null, mapDispatchToProps)(TaskCreatorContainer)