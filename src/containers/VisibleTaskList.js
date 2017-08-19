import React, {Component} from 'react'
import { connect } from 'react-redux'
import Tasks from '../components/Tasks'
import {fetchTasks} from '../actions'

class visibleTaskList extends Component {

	componentDidMount(){
		const {dispatch} = this.props
		dispatch(fetchTasks())
	}

	render(){
		const {items, isFetching} = this.props

		return (
			<div>
				{isFetching && items.length === 0 && <h2>Loading...</h2>}
				{!isFetching && items.length === 0 && <h2>No Tasks Found</h2>}
				{items.length > 0 &&
					<div>
						<Tasks tasks={items} />
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
