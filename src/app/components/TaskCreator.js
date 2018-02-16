import React, { Component } from 'react'
import { addTask } from '../AC'
import { connect } from 'react-redux'

class TaskCreator extends Component{
	constructor(props){
		super(props)
		this.state = {
			isOpen: false,
			title: '',
			text: '',
			tags: []
		}
		this.handleTitleChange = this.handleTitleChange.bind(this)
		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
		this.handleTags = this.handleTags.bind(this)
	}
	render(){
		return (
			<div>
			<input type = 'button' onClick = {this.handleOpen} value = 'New Task'/>
			{this.state.isOpen ? this.getForm() : null}
			</div>
			)
	}

	getForm(){
		return (
			<form name = 'create_task'>
						<input type = 'text' value = {this.state.title} onChange = {this.handleTitleChange}/> <br/>
						<textarea  value = {this.state.text} onChange = {this.handleTextChange}></textarea> <br/>
						<input onClick = {this.handleClick} type = 'button' /> <br/>
						<select value = {this.state.tags} onChange = {this.handleTags} multiple size="4">
    					<option>Lifestyle</option>
    					<option>Family</option>
    					<option>Sport</option>
    					<option>Studying</option>
    					</select>
			</form>)
	}
	handleTags(event){
		const value = event.target.value 
		const { tags } = this.state
		const index = tags.indexOf(value)
		let newTags
		if (index == -1){
			 newTags = tags.concat(value)
		}
		else{
			 newTags = tags.slice(0, index).concat(tags.slice(index + 1, tags.length))
		}
		this.setState({
			tags: newTags
		})
	}

	handleTitleChange(event){
		this.setState({
			title: event.target.value
		})
	}

	handleTextChange(event){
		this.setState({
			text: event.target.value
		})
	}

	handleClick(event){
		const {title, text, tags} = this.state
		const { addTask } = this.props
		event.preventDefault()
		let task = {title,
					text,
					tags
				}
		addTask(task)
		this.setState({
			title: '',
			text: ''
		})
	}

	handleOpen(event){
		event.preventDefault()
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	
}



const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => {
      dispatch(addTask(task))
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskCreator)