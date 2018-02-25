import React, {Component} from 'react'
import AddTaskButtonContainer from '../containers/AddTaskButtonContainer'
import FilterMenuContainer from '../containers/FilterMenuContainer'

const Navigation = (props) => {
	return(
		<div>
		<AddTaskButtonContainer />
		<FilterMenuContainer />
		</div>
		)
}

export default Navigation