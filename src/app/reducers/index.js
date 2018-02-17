import {
	combineReducers
} from 'redux'
import tasks from './tasks'

const sheduler = combineReducers({
	tasks
})

export default sheduler