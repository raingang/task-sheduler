import React, {Component} from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants'

class FilterMenu extends Component{
	constructor(props){
		super(props)
		this.handleFilterClick = this.handleFilterClick.bind(this)
	}
	render(){
		return (
			<div className = 'filter_menu'>
			<button onClick = {this.handleFilterClick(SHOW_ALL)} className = 'filter_menu__filter'>All</button>
			<button onClick = {this.handleFilterClick(SHOW_ACTIVE)} className = 'filter_menu__filter'>Active</button>
			<button onClick = {this.handleFilterClick(SHOW_COMPLETED)} className = 'filter_menu__filter'>Completed</button>
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