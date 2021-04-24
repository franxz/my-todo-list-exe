import React, { Component } from 'react'
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';

class CheckButton extends Component {
  constructor(props) {
    super(props)
    this.state = { checked: props.checked }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => { return { checked: !prevState.checked }})
    this.props.onChange()
  }

  render() {
    const iconStyle = { height: '14px', marginTop: '3px', color: 'rgba(0, 0, 0, 0.75)' }

    let icon
    
    if (this.state.checked) {
      icon = <FaCheckSquare style={iconStyle} />
    } else {
      icon = <FaRegSquare style={iconStyle} />
    }

    return (
      <div onClick={this.handleClick}>
        {icon}
      </div>
    )
  }
}

export default CheckButton