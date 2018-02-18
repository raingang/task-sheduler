import {
	ADD_TASK,
	COMPLETE_TASK,
	DELETE_TASK
} from '../constants'


const initialTasks = [{
				id: (new Date) + Math.random(),
				completed: true,
				title: "Добавить возможность редактировать задачи",
				text: "Необходимо создать новый action, reducer ...",
				tags: ["lifestyle"],
				endDate: new Date(),
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
				tags: action.payload.tags,
				endDate: action.payload.endDate,
				date: new Date(),
			}

		case (COMPLETE_TASK):
			// находит искомый таск, делает копию с новым состоянием выполнения
			const currentTask = state.find((item) => {
				return item.id == action.payload
			})
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
			const newState = state.reduce((prev, item) => {
				if (completedTask.id == item.id) {
					return prev.concat(completedTask)
				} else {
					return prev.concat(item)
				}
			}, [])
			return newState

		case (DELETE_TASK):
			// создаёт новый массив, без удаённого элемента
			return state.reduce((prev, item) => {
				if (action.payload !== item.id) {
					return prev.concat(item)
				} else {
					return prev
				}
			}, [])
		default:
			return state
	}
}

export default tasks