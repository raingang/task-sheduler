import React, { Component } from 'react'
import { addTask } from '../AC'
import { connect } from 'react-redux'

class TaskCreator extends Component{
	constructor(props){
		super(props)
		this.state = {
			title: '',
			text: ''
		}
		this.handleTitleChange = this.handleTitleChange.bind(this)
		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	render(){
		console.log(this.state.title, this.state.text)
		return (<form name = 'create_task'>
			<input type = 'text' value = {this.state.title} onChange = {this.handleTitleChange}/>
			<textarea  value = {this.state.text} onChange = {this.handleTextChange}></textarea>
			<input onClick = {this.handleClick} type = 'button' />
			</form>
			)
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
		const {title, text} = this.state
		const { addTask } = this.props
		event.preventDefault()
		let task = {title,
					text
				}
		addTask(task)
		this.setState({
			title: '',
			text: ''
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