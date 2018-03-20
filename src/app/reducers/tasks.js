import {
	ADD_TASK,
	COMPLETE_TASK,
	DELETE_TASK,
	EDIT_TASK
} from '../constants'
import moment from 'moment'

const initialTasks = [{
	id: (new Date) + Math.random(),
	completed: true,
	title: "Добавить возможность редактировать задачи",
	text: "Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...",
	endDate: moment(new Date(2018, 1, 22).valueOf()),
	date: new Date(),
},
{
	id: (new Date) + Math.random(),
	completed: true,
	title: "Добавить возможность редактировать задачи",
	text: "Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...",
	endDate: moment(new Date(2018, 1, 22).valueOf()),
	date: new Date(),
},
{
	id: (new Date) + Math.random(),
	completed: true,
	title: "Добавить возможность редактировать задачи",
	text: "Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...Необходимо создать новый action, reducer ...",
	endDate: moment(new Date(2018, 1, 22).valueOf()),
	date: new Date(),
}]


const task = (state, action) => {
	switch (action.type) {
		case (ADD_TASK):
			return {
				id: (new Date) + Math.random(),
				completed: false,
				title: action.payload.title,
				text: action.payload.text,
				endDate: action.payload.endDate,
				date: new Date(),
			}

		case (COMPLETE_TASK):
			// находит искомый таск, делает копию с новым состоянием выполнения
			const currentTask = state.find((item) => item.id == action.payload)
			return Object.assign({}, currentTask, {
				completed: !currentTask.completed
			})
			
		default:
			return state
	}
}

const tasks = (state = initialTasks, action) => {
	switch (action.type) {
		case (ADD_TASK):
			return [...state, task(state, action)]

		case (COMPLETE_TASK):
			// создаёт новый массив, где старый таск меняется на копию с новым состоянием
			const completedTask = task(state, action)
			const newState = state.reduce((prev, item) => completedTask.id == item.id ? prev.concat(completedTask) : prev.concat(item), [])
			return newState

		case(EDIT_TASK):
			const newTask = action.payload
			return state.reduce((prev, item) => newTask.id !== item.id ? prev.concat(item) : prev.concat(newTask) , [])

		case (DELETE_TASK):
			// создаёт новый массив, без удаённого элемента
			return state.reduce((prev, item) => action.payload !== item.id ? prev.concat(item) : prev, [])
			
		default:
			return state
	}
}

export default tasks