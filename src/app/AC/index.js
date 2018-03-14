import {
	ADD_TASK,
	COMPLETE_TASK,
	DELETE_TASK,
	EDIT_TASK,
	CREATOR_MODE,
	EDITOR_MODE,
	CLOSE_CREATOR,
	SET_VISIBILITY_FILTER
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

export function editTask(editedTask) {
	return {
		type: EDIT_TASK,
		payload: editedTask
	}
}

export function creatorMode(){
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

export function closeCreator(){
	return {
		type: CLOSE_CREATOR
	}
}

export function setVisibilityFilter(filter){
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}