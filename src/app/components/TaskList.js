import React, { Component } from 'react' 
import { connect } from 'react-redux'
import Task from './Task'

class TaskList extends Component{
	render(){
		console.log(this.props)
		const tasks = this.props.tasks;
		return <div>
		<ul>{this.getBody(tasks)}</ul>
		</div>;
	};

	getBody(tasks){
		return <ul className = 'taskList'>{tasks.map((task) => <li key = {task.id} className = 'taskList__item'><Task task = {task} /></li>)}</ul>
	}
};
 
const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);