import React from 'react'
import VisibleTaskList from '../containers/VisibleTaskList'
import FilterLinks from '../containers/FilterLinks'

const App = () => (
  <div>
  	<FilterLinks />
    <VisibleTaskList />
  </div>
)

export default App