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

function deleteTask(taskId){
	return {
		type : 'DELETE_TASK',
		taskId
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

function inititateDelete(taskId){
	return {
		type : 'INITIATE_DELETE_TASK',
		taskId
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
			return Promise.resolve();			
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

function deleteSelectedTask(taskId){
	return function(dispatch){

		dispatch(inititateDelete(taskId));

		return fetch('http://599560c6b963e100113b6dc0.mockapi.io/tasks/'+taskId,
					{
						method : 'DELETE'
					}
				)
			.then(
				response => response.json(),
				error => console.log('Error in fetching tasks - ', error)
			)
			.then(items => {
				dispatch(deleteTask(taskId))
			})

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
	deleteSelectedTask,
	toggleTask,
	fetchCategories,
	fetchSelectedTask,
}