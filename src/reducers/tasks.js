const tasks = (state = {
	isFetching : false,
	items : [],
	selectedTask : []
} , action) => {

	  switch (action.type){
	  	case 'REQUEST_TASKS' : 
	  		return Object.assign({}, state, {
	  			isFetching : true
	  		});
	  	case 'RECEIVE_TASKS' : 
	  		return Object.assign({}, state, {
	  			isFetching : false,
	  			items : action.items
	  		});
	  	case 'DELETE_TASK' : 
	  		return Object.assign({}, state, {
	  			isFetching : false,
	  			items : state.items.filter(item => item.id !== action.taskId)
	  		});	  	
	  	case 'TOGGLE_TASK' :
	  		return Object.assign({}, state, {
	  			isFetching : false,
	  			items : state.items.map(item=> 
	  			(item.id === action.taskId) ? {...item, done : !item.done} : item
	  		)
	  		});	
	  	case 'SELECTED_TASK_FOUND' : 			
			return {...state, selectedTask : action.selectedTask}
	  	default :
	  		return state;
	  }
  }

export default tasks