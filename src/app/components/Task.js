import React, {
	Component
} from 'react'
import {
	getExecutionStatus,
	dateToString
} from '../utils'

const Task = (props) => {
	const { 
		toolsOpen,
		handleOpenTools
	} = props
	const {
		id,
		text,
		title,
		tags,
		completed,
		endDate,
		date,
	} = props.task


	function getTools(){
		function stopPropagation(event){
			console.log('dsg')
			event.stopPropagation()
		}
		return (
		<div onClick = {stopPropagation} className = 'task__tools'>
			<button  onClick = {props.handleDelete} className = 'task__delete'>Delete</button>
			<button className = 'task__edit'>Edit</button>
			<input checked = {completed} className = 'task__complete' onChange = {props.handleCheckBox} type = 'checkbox' />
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
			<div className = 'task__tags'>{tags}</div>
			{toolsOpen ? getTools() : null}
			</div>
			</div>)
}


export default Task