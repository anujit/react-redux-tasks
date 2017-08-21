import { connect } from 'react-redux'
import { deleteTask } from '../actions'
import Links from '../components/Links'
import { setVisibilityFilter } from '../actions'

const mapDispatchToProps = {
  setFilter : setVisibilityFilter
}

const FilterLinks = connect(
	null,
	mapDispatchToProps
)(Links);

export default FilterLinks 