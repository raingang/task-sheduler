import React, {Component} from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants'
import classNames from 'classnames'

class FilterMenu extends Component{
	constructor(props){
		super(props)
		this.handleFilterClick = this.handleFilterClick.bind(this)
	}
	render(){
		const { visibilityFilter } = this.props
		return (
			<div className = 'filterMenu'>
			<button onClick = {this.handleFilterClick(SHOW_ALL)} className = {classNames('filterMenu__filter', 
																			  			{'filterMenu__filter--active': visibilityFilter == SHOW_ALL})}>All</button>
			<button onClick = {this.handleFilterClick(SHOW_ACTIVE)} className = {classNames('filterMenu__filter', 
																			  			{'filterMenu__filter--active': visibilityFilter == SHOW_ACTIVE})}>Active</button>
			<button onClick = {this.handleFilterClick(SHOW_COMPLETED)} className = {classNames('filterMenu__filter', 
																			  			{'filterMenu__filter--active': visibilityFilter == SHOW_COMPLETED})}>Completed</button>
			</div>
			)
	}

	handleFilterClick(type){
		return () =>{
		this.props.setVisibilityFilter(type)
	}
	}
}

export default FilterMenu