import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDeleteClick, onChange}) => (

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
)

export default Tasks;