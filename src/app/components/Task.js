import React, { Component } from 'react' 

class Task extends Component{
	render(){
		console.log('TASKTASKTASK~~~~~', this.props)
		const { id, text, title, tags } = this.props.task
		return( <div key = {id} className = 'task'>
			<div className = 'task__title'>{title}</div>
			<div className = 'task__text'>{text}</div>
			<div className = 'task__tags'>{tags}</div>
			</div>) 
	}
}

export default Task 