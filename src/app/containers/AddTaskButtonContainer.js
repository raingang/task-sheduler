import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddTaskButton from '../components/AddTaskButton'
import {creatorMode} from '../AC'


class AddTaskButtonContainer extends Component{

	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	render(){
		return 	<AddTaskButton handleClick = {this.handleClick}/>
	}

	handleClick(){
		this.props.creatorMode()
	}
}

export default connect(null, { creatorMode })(AddTaskButtonContainer)