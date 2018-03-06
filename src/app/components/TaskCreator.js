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
			title,
			text,
			focusedDatesInput,
			endDate,
			handleDateChange,
			handleDatesInput
		} = this.props
		return (
			<div className = 'taskCreator'>
			<div className = 'taskCreator__wrapper'>
			<div className =  'taskCreator__goBack'>
			<input type = 'button' value = 'Go back' />
			</div>
			<form className = 'taskCreator__form' name = 'create_task'>
				<DateRange focusedDatesInput = {focusedDatesInput} endDate = {endDate} handleDateChange = {handleDateChange} handleDatesInput = {handleDatesInput}/>
				<input className = 'taskCreator__title' type = 'text' value = {title} placeholder = {'Title...'} onChange = {handleTitleChange}/> 
				<textarea  className = 'taskCreator__text' value = {text} onChange = {handleTextChange}></textarea>     					
				<input className = 'taskCreator__submit' onClick = {handleClick} type = 'button' value = 'Create Task'/> 			
			</form>
			</div>
			</div>
			)
	}
}


export default TaskCreator