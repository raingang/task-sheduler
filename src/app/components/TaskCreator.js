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
			handleSubmit,
			handleTextChange,
			handleTitleChange,
			title,
			text,
			focusedDatesInput,
			endDate,
			handleDateChange,
			handleDatesInput,
			handleBackClick
		} = this.props
		return (
			<div className = 'taskCreator'>
			<div className = 'taskCreator__wrapper'>
			<input className = 'taskCreator__goBack' onClick = {handleBackClick} type = 'button' value = 'Go Back' />
			<form className = 'taskCreator__form' name = 'create_task' onSubmit = {handleSubmit}>
				<DateRange focusedDatesInput = {focusedDatesInput} endDate = {endDate} handleDateChange = {handleDateChange} handleDatesInput = {handleDatesInput}/>
				<input className = 'taskCreator__title' type = 'text' value = {title} placeholder = {'Title...'} onChange = {handleTitleChange}/> 
				<textarea  className = 'taskCreator__text' value = {text} onChange = {handleTextChange}></textarea>     					
				<input className = 'taskCreator__submit'  type = 'submit' value = 'Create Task'/> 			
			</form>
			</div>
			</div>
			)
	}
}


export default TaskCreator