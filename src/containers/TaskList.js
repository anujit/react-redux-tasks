import { connect } from 'react-redux'
import { toggleTask, deleteSelectedTask } from '../actions'
import Tasks from '../components/Tasks'

const mapDispatchToProps = {
  onDeleteClick: deleteSelectedTask,
  onChange: toggleTask
}

const TaskList = connect(
	null,
	mapDispatchToProps
)(Tasks);

export {TaskList}