import { connect } from 'react-redux'
import { deleteTask, toggleTask } from '../actions'
import Tasks from '../components/Tasks'

const mapDispatchToProps = {
  onDeleteClick: deleteTask,
  onChange: toggleTask
}

const TaskList = connect(
	null,
	mapDispatchToProps
)(Tasks);

export {TaskList}