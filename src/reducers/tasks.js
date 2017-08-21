const tasks = (state = {
	isFetching : false,
	items : []
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
	  			items : state.items.slice(0, action.index).concat(state.items.slice(action.index + 1))
	  		});	  	
	  	case 'TOGGLE_TASK' :
	  		return Object.assign({}, state, {
	  			isFetching : false,
	  			items : state.items.map(item=> 
	  			(item.id === action.taskId) ? {...item, done : !item.done} : item
	  		)
	  		});	  		  		
	  	default :
	  		return state;
	  }
  }

export default tasks