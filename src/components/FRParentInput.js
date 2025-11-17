import React, { Component } from 'react'
import ForwardingInput from './ForwardingInput'

 class FRParentInput extends Component {
    constructor(props) {
      super(props)
      this.curRef1=React.createRef()
    }
    
 clickHandler=()=>{
    this.curRef1.current.focus()
 }
  render() {
    return (
      <div>
        <ForwardingInput ref={this.curRef1}/>
        <button onClick={this.clickHandler}> Frorward Input</button>
      </div>
    )
  }
}

export default FRParentInput
