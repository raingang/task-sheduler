import React, {Component} from 'react';
import TaskList from './TaskList'
import TaskCreator from './TaskCreator'

class App extends Component{
    render(){
        return (
            <div>
            	<TaskCreator />
                <TaskList />
            </div>
        );
    }
}

export default App