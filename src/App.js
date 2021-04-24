import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { FaRegDizzy } from 'react-icons/fa';

import TodoItem from './components/TodoItem'
import NewTodoItem from './components/NewTodoItem'

import todoData from './todoData'

class App extends Component {
  constructor() {
    super()
    this.state = { todoItems: todoData.items, nextId: todoData.nextId }
    this.changeItem = this.changeItem.bind(this)
    this.createNewItem = this.createNewItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  // check / uncheck
  changeItem(id) {
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

  createNewItem(text) {
    this.setState(prevState => {
      return {
        todoItems: [
          ...prevState.todoItems,
          { id: prevState.nextId, text: text, checked: false }
        ],
        nextId: prevState.nextId + 1,
      }
    })
  }

  removeItem(id) {
    this.setState(prevState => {
      return { todoItems: prevState.todoItems.filter(item => item.id !== id) }
    })
  }

  render() {
    let i = 0

    return (
      <div className='container'>
        <div className='topbar'>
          <FaRegDizzy style={{
            padding: '2px',
            margin: '1px 2px',
            color: 'blue',
            backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.5)',
          }} />
          <h1>MyTodoList.exe</h1>
        </div>
        
        <CSSTransitionGroup transitionName="items" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.state.todoItems.map(item =>
            <TodoItem key={item.id} order={i++} item={item} changeItem={this.changeItem} removeItem={this.removeItem} />
          )}
        </CSSTransitionGroup>

        <NewTodoItem order={i} createNewItem={this.createNewItem} />
      </div>
    )
  }
}

export default App
