function setVisibilityFilter(filter){
	return {
		type : 'SET_VISIBILITY_FILTER',
		filter
	}
}

function requestTasks(){
	return {
		type : 'REQUEST_TASKS'
	}
}

function requestCategories(){
	return {
		type : 'REQUEST_CATEGORIES'
	}
}

function deleteTask(index){
	return {
		type : 'DELETE_TASK',
		index
	}
}

function toggleTask(taskId){
	return {
		type : 'TOGGLE_TASK',
		taskId
	}
}

function receiveTasks(items,itemsDeleted){
	return {
		type : 'RECEIVE_TASKS',
		items : items,
		itemsDeleted : itemsDeleted
	}
}

function receiveCategories (items){
	return {
		type : 'RECEIVE_CATEGORIES',
		items
	}
}

function receiveSelectedTask(selectedTask){
	return {
		type : 'SELECTED_TASK_FOUND',
		selectedTask
	}
}

// this is a thunk. used like just any other action creator
// store.dispatch(fetchTasks())

function fetchTasks(){
	return function(dispatch){

		dispatch(requestTasks());

		return fetch('http://599560c6b963e100113b6dc0.mockapi.io/tasks')
			.then(
				response => response.json(),
				error => console.log('Error in fetching tasks - ', error)
			)
			.then(items => {
				dispatch(receiveTasks(items))
			})

	}
}

function fetchSelectedTask(taskId){
	const getSelectedTask = (tasks) => {
		const selectedTask = tasks.filter(task => task.id === taskId)
		if(selectedTask.length) return selectedTask
		else return []
	}

	return (dispatch, getState) => {
		const selectedTask = getSelectedTask(getState().tasks.items)
		if(selectedTask.length) {
			dispatch(receiveSelectedTask(selectedTask));
		} else {
			return fetch('http://599560c6b963e100113b6dc0.mockapi.io/tasks')
			.then(
				response => response.json(),
				error => console.log('Error in fetching tasks - ', error)
			)
			.then(items => {
				const selectedTask = getSelectedTask(items)
				dispatch(receiveSelectedTask(selectedTask));
			})
		}
	}
}

function fetchCategories(){
	return function(dispatch){

		dispatch(requestCategories());

		return fetch('http://599560c6b963e100113b6dc0.mockapi.io/categories')
			.then(
				response => response.json(),
				error => console.log('Error in fetching categories - ', error)
			)
			.then(items => {
				dispatch(receiveCategories(items))
			})

	}
}

export {
	setVisibilityFilter, 
	fetchTasks,
	deleteTask,
	toggleTask,
	fetchCategories,
	fetchSelectedTask
}