import React, { Component } from 'react'

export default class Todo extends Component {
  onClick(){
    this.props.toggleTodo(this.props.index)
  }
  render(){
    return (
      <li className={this.props.completed ? `completed` : '' } onClick={this.onClick.bind(this)}>
        {this.props.text}
      </li>
    )
  }
}