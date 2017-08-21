import { combineReducers } from 'redux'
import tasks from './tasks'
import visibilityFilter from './visibilityFilter'
import categories from './categories'

const taskApp = combineReducers({
  tasks,
  visibilityFilter,
  categories
})

export default taskApp
