import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchTasks} from '../actions'

class TaskForm extends Component {

	// componentDidMount(){
	// 	const {dispatch} = this.props
	// 	dispatch(fetchTasks())
	// 	.then(dispatch(fetchCategories()))
	// }

	render(){
		// const { items } = this.props
		// const tasks = getVisibleTasks(items,visibilityFilter)

		return (
			<div>
				Task Form
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
)(TaskForm);
