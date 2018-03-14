const creator = (state = null, action) => {
	switch(action.type){
		case('CREATOR_MODE'):
			return {}

		case('EDITOR_MODE'):
			return action.task

		case('CLOSE_CREATOR'):
			return null
			
		default:
			return null
	}
}
export default creator