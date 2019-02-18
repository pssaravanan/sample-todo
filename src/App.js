import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList'
import { Provider } from 'react-redux'
import {combineReducers, createStore} from 'redux'
import todo from './reducers/todo'

const rootReducers = combineReducers({todo})
const store = createStore(rootReducers)
class App extends Component {
  render() {
    return (<Provider store={store}>
      <TodoList/>
    </Provider>)
  }
}

export default App;
