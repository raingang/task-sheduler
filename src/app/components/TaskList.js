import React, { Component } from 'react' 
import { connect } from 'react-redux'
import TaskContainer from '../containers/TaskContainer'

class TaskList extends Component{
	render(){
		const tasks = this.props.tasks;
		return <div>
		<ul>{this.getBody(tasks)}</ul>
		</div>;
	};

	getBody(tasks){
		return <ul className = 'taskList'>{tasks.map((task) => <li key = {task.id} className = 'taskList__item'><TaskContainer task = {task} /></li>)}</ul>
	}
};
 
const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);