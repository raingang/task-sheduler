import { ADD_TASK, COMPLETE_TASK } from '../constants'

export function addTask(task){
	return {
		type: ADD_TASK,
		payload: task
	}
}

export function completeTask(id){
	return {
		type: COMPLETE_TASK,
		payload: id
	}
}