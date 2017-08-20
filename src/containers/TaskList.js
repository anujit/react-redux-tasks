import { connect } from 'react-redux'
import { deleteTask } from '../actions'
import Tasks from '../components/Tasks'

const mapDispatchToProps = {
  onDeleteClick: deleteTask
}

const TaskList = connect(
	null,
	mapDispatchToProps
)(Tasks);

export {TaskList}