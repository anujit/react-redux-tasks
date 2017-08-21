import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {fetchTasks} from '../actions'
import {TaskList} from './TaskList'
import FilterLinks from './FilterLinks'

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
		const tasks = getVisibleTasks(items,visibilityFilter)

		return (
			<div>
				{isFetching && tasks.length === 0 && <div>Loading...</div>}
				{!isFetching && items.length === 0 && <div>No Tasks Found</div>}
				{items.length > 0 &&
					<div>
						<div className = "row">
							<div className="col-md-12">
								<h2>Tasks App - Tasks List</h2>
							</div>
						</div>
						<FilterLinks />
						<TaskList tasks={tasks} />
						<div className="row">
							<div className="col-md-12">
								<Link to={{ pathname: '/edit' }}>Create New Task</Link>
							</div>
						</div>
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
