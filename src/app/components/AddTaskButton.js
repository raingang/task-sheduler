import React, { Component } from 'react'

const AddTaskButton =  (props) => {
	return (<input onClick = {props.handleClick} className = 'taskCreator__open' type = 'button' value = 'New Task'/>)
}

export default AddTaskButton