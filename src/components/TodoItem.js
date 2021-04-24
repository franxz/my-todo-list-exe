import React, {Component} from 'react'
import { FaRegWindowClose } from 'react-icons/fa';

import CheckButton from './CheckButton'

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
      <div className='todoItem' style={this.props.order % 2 !== 1 ? oddStyle : null} >
        <CheckButton checked={checked} onChange={() => this.props.changeItem(id)} />
        <label style={checked ? checkedStyle : null}>{text}</label>
        <FaRegWindowClose style={{ height: '14px', marginLeft: 'auto' }} onClick={() => this.props.removeItem(id)} />
      </div>
    )
  }
}

export default TodoItem