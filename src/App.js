import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import AddTodo from './AddTodo'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {todos: []}
  }
  onAdd(text){
    let todos = [{text: text, completed: false}, ...this.state.todos]
    this.setState({todos: todos})
  }
  toggleTodo(index){
    let todos = this.state.todos.map((todo, i) => {
      if(i == index){
        return {...todo, ...{completed: !todo.completed}}
      }else{
        return todo
      }
    })
    this.setState({todos: todos})
  }
  render() {
    let todos = this.state.todos.map((todo, i) => {
      return (<Todo key={i} index={i} toggleTodo={this.toggleTodo.bind(this)} {...todo}/>)
    })
    return (
      <div>
        <AddTodo onAdd={this.onAdd.bind(this)}/>
        {todos}
      </div>
    );
  }
}

export default App;
