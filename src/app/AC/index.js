import {
	ADD_TASK,
	COMPLETE_TASK,
	DELETE_TASK,
	CREATOR_MODE,
	EDITOR_MODE
} from '../constants'

export function addTask(task) {
	return {
		type: ADD_TASK,
		payload: task
	}
}

export function completeTask(id) {
	return {
		type: COMPLETE_TASK,
		payload: id
	}
}

export function deleteTask(id) {
	return {
		type: DELETE_TASK,
		payload: id
	}
}

export function creatorMode(){
	console.log(CREATOR_MODE)
	return {
		type: CREATOR_MODE
	}
}

export function editorMode(task){
	return {
		type: EDITOR_MODE,
		task: task
	}
}