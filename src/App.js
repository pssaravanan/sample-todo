import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList'
import { Provider } from 'react-redux'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import todo from './reducers/todo'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()
const rootReducers = combineReducers({todo})
const store = createStore(rootReducers, applyMiddleware(loggerMiddleware))
class App extends Component {
  render() {
    return (<Provider store={store}>
      <TodoList/>
    </Provider>)
  }
}

export default App;
