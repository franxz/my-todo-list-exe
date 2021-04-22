import React, {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {id, text, checked} = this.props.item

    const checkedStyle = {
      color: '#696969',
      textDecorationLine: 'line-through',
    }

    const oddStyle = {
      backgroundColor: '#b088f9',
    }

    return (
      <div className='todoItem' style={id % 2 !== 1 ? oddStyle : null}>
        <input type='checkbox' id={id} checked={checked} onChange={() => this.props.handleChange(id)} />
        <label htmlFor={id} style={checked ? checkedStyle : null}>{text}</label>
      </div>
    )
  }
}

export default TodoItem