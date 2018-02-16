import React, { Component } from 'react' 
import { connect } from 'react-redux'
import TaskCreator from './TaskCreator'

class TaskList extends Component{
	render(){
		console.log(this.props)
		const tasks = this.props.tasks;
		return <div>
		<ul>{this.getBody(tasks)}</ul>
		<TaskCreator />
		</div>;
	};

	getBody(tasks){
		return <ul className = 'taskList'>{tasks.map((task) => <li className = 'taskList__element' key = {task.id}>{task.id}</li>)}</ul>
	}
};
 
const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);