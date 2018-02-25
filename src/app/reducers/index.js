import {
	combineReducers
} from 'redux'
import tasks from './tasks'
import creator from './creator'
import visibilityFilter from './visibilityFilter'


const sheduler = combineReducers({
	tasks,
	creator,
	visibilityFilter
})

export default sheduler