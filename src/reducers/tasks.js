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
	  		return state.items.slice(0,action.index).concat(state.items.slice(action.index + 1))
	  	default :
	  		return state;
	  }
  }

export default tasks