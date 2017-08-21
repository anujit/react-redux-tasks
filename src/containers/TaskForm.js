import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchTasks, fetchCategories, fetchSelectedTask} from '../actions'
import { Link } from 'react-router'

class TaskForm extends Component {

	componentDidMount(){
		const {dispatch, taskId} = this.props

		// fetch all the tasks and categories if there is a taskId
		if(taskId){
			dispatch(fetchSelectedTask(taskId))
			.then(dispatch(fetchCategories()))
		} 
		// else its a new task form
		else {
			dispatch(fetchCategories())
		}
	}

	render(){
		const { categoryItems, isFetchingCategories, items, taskId, selectedTask } = this.props

		return (
			<div>
				<div className = "row">
					<div className="col-md-12">
						<h2>Tasks App - Add/Edit Task</h2>
					</div>
				</div>
				<form>
					<div className = "form-group row">
						<div className = "col-md-6 col-sm-6">
						    <label>Description</label>
						    <input type="text" className="form-control" placeholder="Enter a description" value={ selectedTask.length > 0 ? selectedTask[0].description : '' } />						
						</div>
					</div>
					<div className = "form-group row">
						<div className = "col-md-6 col-sm-6">
							<label>Select A Category</label>						
							{
								isFetchingCategories && 

								<div>
									Fetching Categories...	
								</div>
							}
							{
								!isFetchingCategories && 

								<div>
									<select	value={ selectedTask.length > 0 && selectedTask[0].category } onChange={()=>console.log('changed')}>

										{
											categoryItems.map((category, index) => 
											{
												return <option key={index}>{category.name}</option>
											} 
										)}
									</select>									
								</div>
							}							
						</div>
					</div>
					<button type="button" className="btn btn-primary">Submit</button>		
				</form>
				<div className="row">
					<div className="col-md-12">
						<Link to={{ pathname: '/' }}>Go Back</Link>
					</div>
				</div>				
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const {items, isFetching, selectedTask } = state.tasks;
	const isFetchingCategories = state.categories.isFetching;
	const categoryItems = state.categories.items;
	const visibilityFilter = state.visibilityFilter;
	const taskId = ownProps.params.taskId;

	return {
		items,
		isFetching,
		visibilityFilter,
		taskId,
		isFetchingCategories,
		categoryItems,
		selectedTask
	}
}

export default connect(
	mapStateToProps
)(TaskForm);
