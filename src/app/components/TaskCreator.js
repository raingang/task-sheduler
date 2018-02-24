import React, {
	Component
} from 'react'
import {
	addTask
} from '../AC'
import {
	connect
} from 'react-redux'
import DateRange from './DateRange'

class TaskCreator extends Component {
	render() {
		const {
			handleClick,
			handleTextChange,
			handleTitleChange,
			tags,
			title,
			text,
			handleTags,
			focusedDatesInput,
			endDate,
			handleDateChange,
			handleDatesInput
		} = this.props
		return (
			<form className = 'taskCreator__form' name = 'create_task'>
						<DateRange focusedDatesInput = {focusedDatesInput} endDate = {endDate} handleDateChange = {handleDateChange} handleDatesInput = {handleDatesInput}/>
						<input className = 'taskCreator__title' type = 'text' value = {title} placeholder = {'Title...'} onChange = {handleTitleChange}/> 
						<textarea  className = 'taskCreator__text' value = {text} onChange = {handleTextChange}></textarea> 
						<select value = {tags} onChange = {handleTags} multiple size="4">
    					<option>Lifestyle</option>
    					<option>Family</option>
    					<option>Sport</option>
    					<option>Studying</option>
    					</select>
    					
						<input className = 'taskCreator__submit' onClick = {handleClick} type = 'button' value = 'Create Task'/> 			
			</form>)
	}
}


export default TaskCreator