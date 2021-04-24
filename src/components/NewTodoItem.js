import React, {Component} from 'react'
import { FaChevronRight, FaBomb } from 'react-icons/fa';


class NewTodoItem extends Component {
  constructor() {
    super()
    this.state = { locked: true }
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && event.target.value !== '') {
      if (event.target.value === 'S3CR3T') {
        this.setState({ locked: false })
      } else {
        this.props.createNewItem(event.target.value)
      }
      event.target.value = ''
    }
  }

  render() {
    const oddStyle = {
      backgroundColor: '#b088f9',
    }

    const iconStyle = { marginLeft: '2px', marginTop: '1px', height: '14px' }

    return (
      <div className='todoItem' style={this.props.order % 2 !== 1 ? oddStyle : null}>
        { this.state.locked ? <FaChevronRight style={iconStyle} /> : <FaBomb style={iconStyle} /> }
        <input className='newItemInput' placeholder='Add new item...' onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}

export default NewTodoItem