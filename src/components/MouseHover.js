import React, { Component } from 'react'
import updatedcomponent from './HOC'
export class MouseHover extends Component {
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>clicked {count} times</h1>
      </div>
    )
  }
}

export default updatedcomponent(MouseHover)
