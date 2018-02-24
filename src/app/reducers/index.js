import {
	combineReducers
} from 'redux'
import tasks from './tasks'
import creator from './creator'

const sheduler = combineReducers({
	tasks,
	creator
})

export default sheduler