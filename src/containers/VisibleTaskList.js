import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchTasks} from '../actions'
import {TaskList} from './TaskList'

const getVisibleTasks = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_COMPLETED':
      return items.filter(t => t.done)
    case 'SHOW_UNFINISHED':
      return items.filter(t => !t.done)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


class visibleTaskList extends Component {

	componentDidMount(){
		const {dispatch} = this.props
		dispatch(fetchTasks())
	}

	render(){
		const {items, isFetching, visibilityFilter} = this.props

		return (
			<div>
				{isFetching && items.length === 0 && <h2>Loading...</h2>}
				{!isFetching && items.length === 0 && <h2>No Tasks Found</h2>}
				{items.length > 0 &&
					<div>
						<TaskList tasks={getVisibleTasks(items,visibilityFilter)} />
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const {items, isFetching} = state.tasks;
	const visibilityFilter = state.visibilityFilter;

	return {
		items,
		isFetching,
		visibilityFilter
	}
}

export default connect(
	mapStateToProps
)(visibleTaskList);
