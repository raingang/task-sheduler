import React, {
	Component
} from 'react'
import {
	addTask
} from '../AC'
import {
	connect
} from 'react-redux'

class TaskCreator extends Component {
	render() {
		const {
			handleOpen,
			isOpen
		} = this.props
		return (
			<div>
			<input type = 'button' onClick = {handleOpen} value = 'New Task'/>
			{isOpen ? this.getForm() : null}
			</div>
		)
	}

	getForm() {
		const {
			handleClick,
			handleOpen,
			handleTextChange,
			handleTitleChange,
			tags,
			title,
			text,
			handleTags,
			isOpen
		} = this.props
		return (
			<form name = 'create_task'>
						<input type = 'text' value = {title} onChange = {handleTitleChange}/> <br/>
						<textarea  value = {text} onChange = {handleTextChange}></textarea> <br/>
						<input onClick = {handleClick} type = 'button' /> <br/>
						<select value = {tags} onChange = {handleTags} multiple size="4">
    					<option>Lifestyle</option>
    					<option>Family</option>
    					<option>Sport</option>
    					<option>Studying</option>
    					</select>
			</form>)
	}
}


export default TaskCreator