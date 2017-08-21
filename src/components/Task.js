import React from 'react'

const Task = ({ index, taskId, done, due_date, category, description, onClick, onChange}) => (
	<tr style={{opacity : done ? '0.4' : 1}}>
		<th scope="row">
			{index}
		</th>
		<td>{description}</td>
		<td>{category}</td>
		<td>{due_date}</td>
		<td className="edit-button" style={{cursor:'pointer'}}>Edit</td>
		<td className="delete-button" style={{cursor:'pointer'}} onClick={onClick}>Delete</td>
		<td><input type="checkbox" onChange={onChange} defaultChecked={done} checked={done} /></td>
	</tr>
)

export default Task;