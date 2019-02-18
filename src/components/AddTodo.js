import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor(props){
    super(props)
    this.state = {value: ''}
  }
  onKeyPress(e){
    if(e.key == 'Enter'){
      this.props.onAdd({text: e.target.value, completed: false})
      this.setState({value: ''})
    }
  }
  onChange(e){
    this.setState({value: e.target.value})
  }
  render(){
    return (
      <input type="text"  value={this.state.value}
             onChange={this.onChange.bind(this)}
             onKeyPress={this.onKeyPress.bind(this)}/>
    )
  }
}