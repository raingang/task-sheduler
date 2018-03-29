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
	title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	text: "Mauris ac ornare lacus. Nam vestibulum sollicitudin laoreet. Praesent a leo sem. Suspendisse et turpis urna. Proin et luctus felis, eu vehicula sapien. Ut orci lorem, faucibus lobortis laoreet at, feugiat eget leo. Vestibulum ultrices posuere luctus. Etiam ullamcorper, neque vel convallis dignissim, nulla enim sollicitudin neque, quis interdum felis urna sit amet nisl. Duis scelerisque auctor mollis. Pellentesque quis nulla porttitor dolor faucibus euismod. Morbi in aliquet augue. Nullam sollicitudin condimentum ante, et mattis velit convallis eget. Sed lobortis aliquam sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut enim elit..",
	endDate: moment(new Date(2018, 1, 22).valueOf()),
	date: new Date(),
},
{
	id: (new Date) + Math.random(),
	completed: true,
	title: "Nam mi sem, aliquam vitae tempor vitae, pretium ac enim. Mauris suscipit ex eget lacus maximus blandit.",
	text: "Integer pretium vel neque varius convallis. Quisque id mi quis nisl vehicula tristique at gravida augue. Donec ipsum tortor, imperdiet in lacinia et, fringilla ac enim. Etiam at nisl auctor, blandit diam vel, placerat quam. Quisque eu nibh et quam egestas maximus. Sed luctus, arcu et aliquet lobortis, augue tellus aliquet nulla, nec fringilla leo leo ut quam. Nulla in elit ornare, porttitor nunc non, fermentum lacus. Quisque sagittis tristique lectus, sit amet hendrerit quam dignissim eget. Cras pellentesque, arcu eget faucibus fermentum, lacus mauris egestas velit, eget pretium turpis arcu in augue.",
	endDate: moment(new Date(2018, 1, 22).valueOf()),
	date: new Date(),
},
{
	id: (new Date) + Math.random(),
	completed: true,
	title: "Maecenas ante dui, malesuada sit amet suscipit at, vulputate rutrum mi.",
	text: "Cras id massa scelerisque, commodo risus sit amet, imperdiet leo. In ac neque sed augue consequat luctus id sed tellus. Nulla bibendum non nibh sit amet cursus. Curabitur id purus quis leo imperdiet elementum. Pellentesque lobortis ex quis elit fermentum sodales. Aliquam rhoncus efficitur ipsum. Ut interdum augue felis. Vivamus faucibus mattis ligula, quis dictum enim aliquet ut. Integer imperdiet elementum lacus at lobortis. Pellentesque auctor fringilla nunc at dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vel magna viverra, mollis ante bibendum, fringilla elit. Suspendisse nisl orci, pellentesque in tempus sit amet, lacinia a elit. Morbi pulvinar magna nec lectus dapibus ultricies.",
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