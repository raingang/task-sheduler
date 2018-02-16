import React, { Component } from 'react' 
import {completeTask} from '../AC'
import { connect } from 'react-redux'

class Task extends Component{
	constructor(props){
		super(props)
		this.handleCheckBox = this.handleCheckBox.bind(this)
	}
	render(){
		const { id, text, title, tags } = this.props.task
		return( <div key = {id} className = 'task'>
			<div className = 'task__title'>{title}</div>
			<div className = 'task__text'>{text}</div>
			<div className = 'task__tags'>{tags}</div>
			<input className = 'task__complete' onChange = {this.handleCheckBox} type = 'checkbox' />
			</div>) 
	}
	handleCheckBox(event){
		const { completeTask, task } = this.props
		completeTask(task.id)
	}
}

export default connect(null, {completeTask})(Task)