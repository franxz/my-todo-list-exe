import React, {Component} from 'react'

class NewTodoItem extends Component {
  constructor() {
    super()
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.createNewItem(event.target.value)
      event.target.value = ''
    }
  }

  render() {
    const oddStyle = {
      backgroundColor: '#b088f9',
    }

    return (
      <div className='todoItem' style={this.props.order % 2 !== 1 ? oddStyle : null}>
        <input className='newItemInput' placeholder='Add new item...' onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}

export default NewTodoItem