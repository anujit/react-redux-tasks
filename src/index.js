import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'


const store = createStore(reducer, 
	compose(
		applyMiddleware(thunkMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
