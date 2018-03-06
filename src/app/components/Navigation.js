import React, {Component} from 'react'
import AddTaskButtonContainer from '../containers/AddTaskButtonContainer'
import FilterMenuContainer from '../containers/FilterMenuContainer'

const Navigation = (props) => {
	return(
		<section className = 'navigation'>
		<div className = 'navigation__wrapper'>
		<AddTaskButtonContainer />
		<FilterMenuContainer />
		</div>
		</section>
		)
}

export default Navigation