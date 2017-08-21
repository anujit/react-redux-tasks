import React from 'react'
import {Link} from 'react-router'

const Task = ({ index, taskId, done, due_date, category, description, onClick, onChange}) => (
	<tr style={{opacity : done ? '0.4' : 1}}>
		<th scope="row">
			{index}
		</th>
		<td>{description}</td>
		<td>{category}</td>
		<td>{due_date}</td>
		<td className="edit-button" style={{cursor:'pointer'}}><Link to={{pathname: '/edit/' + taskId }}>Edit</Link></td>
		<td className="delete-button" style={{cursor:'pointer'}} onClick={onClick}>Delete</td>
		<td><input type="checkbox" onChange={onChange} checked={done} /></td>
	</tr>
)

export default Task;