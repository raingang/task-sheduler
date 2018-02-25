import React, {
	Component
} from 'react'
import {
	getExecutionStatus,
	dateToString
} from '../utils'
import TaskCreatorContainer from '../containers/TaskCreatorContainer'

const Task = (props) => {
	const { 
		toolsOpen,
		editOpen,
		handleEdit,
		handleDelete,
		handleOpenTools,
		task
	} = props
	const {
		id,
		text,
		title,
		tags,
		completed,
		endDate,
		date,
	} = task


	function getEditTask(){
		return editOpen ? <TaskCreatorContainer task = {task}/> : null
	}

	function getTools(){
		function stopPropagation(event){
			event.stopPropagation()
		}
		return (
		<div onClick = {stopPropagation} className = 'task__tools'>
			<button  onClick = {handleDelete} className = 'task__delete'>Delete</button>
			<button onClick = {handleEdit} className = 'task__edit'>Edit</button>
			<input checked = {completed} className = 'task__complete' onChange = {props.handleCheckBox} type = 'checkbox' />
			{getEditTask()}
		</div>
		)
	}
	
	return (<div onClick = {handleOpenTools} key = {id} className = 'task' >		
			<div className = 'task__row'>
			<div  className = 'task__status'>{getExecutionStatus(date, endDate)}</div>
			<div className = 'task__date'>{dateToString(date)}</div>
			</div>	
			<div className = 'task__body'>		
			<div className = 'task__title'>{title}</div>
			<div className = 'task__text'>{text}</div>
			{toolsOpen ? getTools() : null}
			</div>
			</div>)
}


export default Task