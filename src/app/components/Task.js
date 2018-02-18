import React, {
	Component
} from 'react'

const Task = (props) => {
	const {
		id,
		text,
		title,
		tags,
		completed,
		endDate
	} = props.task
	return (<div key = {id} className = 'task'>	
			<h1>{endDate.toString()}</h1>		
			<div className = 'task__title'>{title}</div>
			<div className = 'task__text'>{text}</div>
			<div className = 'task__tags'>{tags}</div>
			<button  onClick = {props.handleDelete} className = 'task__delete'>Delete</button>
			<button className = 'task__edit'>Edit</button>
			<input checked = {completed} className = 'task__complete' onChange = {props.handleCheckBox} type = 'checkbox' />
			</div>)
}


export default Task