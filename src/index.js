import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import TaskForm from './containers/TaskForm'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router'


const store = createStore(reducer, 
	compose(
		applyMiddleware(thunkMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

render(
  <Provider store={store}>
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/edit(/:taskId)" component={TaskForm} />		
	</Router>    
  </Provider>,
  document.getElementById('root')
)
