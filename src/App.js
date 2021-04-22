import React, {Component} from 'react'

import TodoItem from './components/TodoItem'

import todoData from './todoData'

class App extends Component {
  constructor() {
    super()
    this.state = { todoItems: todoData }
    this.handleItemChange = this.handleItemChange.bind(this)
  }

  handleItemChange(id) {
    this.setState(prevState => {
      const newTodoItems = prevState.todoItems.map(item => {
        if (item.id === id) {
          item.checked = !item.checked
        }
        return item
      })

      return { todoItems: newTodoItems }
    })
  }

  /*removeItem(id) {
    this.setState(prevState => {
      return { todoItems: prevState.todoItems.filter(item => item.id !== id) }
    })
  }*/

  render() {
    return (
      <div className='container'>
        <div className='topbar'>
          <h1>🌴 MyTodoList.exe</h1>
        </div>

        {this.state.todoItems.map(item =>
          <TodoItem key={item.id} item={item} handleChange={this.handleItemChange} />
        )}
      </div>
    )
  }
}

export default App
