const todo = (state = {todos: []}, action) => {
  let todos;
  switch(action.type){
    case 'ADD_TODO':
      todos = [action.todo, ...state.todos]
      return {todos: todos}
    case 'TOGGLE_TODO':
      todos = state.todos.map((todo, i) => {
        if(i == action.index){
          return { ...todo, completed: !todo.completed}
        }else{
          return todo
        }
      })
      return {todos: todos}
    default:
      return state
  }
}
export default todo