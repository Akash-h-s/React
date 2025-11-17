import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

class Memoparent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"akash"
      }
    }
componentDidUpdate(){
    setInterval(()=>{
        this.setState({
            name:'akash'
        })
    },2000)
}   
  render() {
    console.log("*************parent component*****************")
    return (
      <div>
        ParentComponent
        <MemoComponent name={this.state.name}/>
      </div>
    )
  }
}

export default Memoparent
