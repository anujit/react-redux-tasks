import React from 'react'

const Task = ({ index, taskId, done, due_date, category, description}) => (
	<tr>
		<th scope="row">
			{index}
		</th>
		<td>{description}</td>
		<td>{category}</td>
		<td>{due_date}</td>
		<td>Edit</td>
		<td>Delete</td>
	</tr>
)

export default Task;