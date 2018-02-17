import React, { Component } from 'react' 

const Task = (props)=> {
		const { id, text, title, tags } = props.task
		return( <div key = {id} className = 'task'>
			<button onClick = {props.handleDelete} className = 'task__delete'>Delete</button>
			<div className = 'task__title'>{title}</div>
			<div className = 'task__text'>{text}</div>
			<div className = 'task__tags'>{tags}</div>
			<input className = 'task__complete' onChange = {props.handleCheckBox} type = 'checkbox' />
			</div>) 
}


export default Task