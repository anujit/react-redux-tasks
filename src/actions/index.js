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


export {
	setVisibilityFilter, 
	fetchTasks,
	deleteTask,
	toggleTask
}