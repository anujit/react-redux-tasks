import React, {Component} from 'react'
import Task from './Task'


class Tasks extends Component {
	render() {
		const {tasks, onDeleteClick, onChange} = this.props

		return(
			<div>
				{!tasks.length && <div>No tasks to show</div>}

				{ tasks.length > 0 && 
					<table className="table">
						<thead className="thead-inverse">
							<tr>
								<th>#</th>
								<th>Description</th>
								<th>Category</th>
								<th>Due Date</th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{tasks.map ((task,index) =>
								<Task 
									key={index}
									index={index + 1}
									taskId={task.id}
									{...task}
									onClick = {() => onDeleteClick(index)}
									onChange = {() => onChange(task.id)}
								/>
							)}			
						</tbody>
					</table>
				}
			</div>
		)
	}
}

export default Tasks;