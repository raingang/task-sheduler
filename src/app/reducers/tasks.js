import { ADD_TASK } from '../constants'

const task = (state, action) => {
	switch (action.type) {
		case (ADD_TASK): 
			return {
					id: (new Date) + Math.random(),
					text: action.text,
					tags: action.tags,
					dateToDo: action.dateToDo,
					date: new Date(),
			}
		default:
			return state
	}
}

const tasks = (state = [], action) => {
	switch(action.type) {
		case (ADD_TASK):
			console.log('ADD_TASK')
			return [...state, task(state, action)]
		default: 
			return state			
	}
}

export default tasks