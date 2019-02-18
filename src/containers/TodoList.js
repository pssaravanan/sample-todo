import React, { Component } from 'react';
import './../App.css';
import Todo from './../components/Todo'
import AddTodo from './../components/AddTodo'
import {connect} from 'react-redux'
import {addTodo, toggleTodo} from './../actions/todo'

class TodoList extends Component {
  render() {
    let todos = this.props.todos.map((todo, i) => {
      return (<Todo key={i} index={i} toggleTodo={this.props.toggleTodo} {...todo}/>)
    })
    return (
      <div>
        <AddTodo onAdd={this.props.addTodo}/>
        {todos}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.todo
})
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo)=>{
    dispatch(addTodo(todo));
  },
  toggleTodo: (index) => {
    dispatch(toggleTodo(index))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
