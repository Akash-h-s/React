import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn:true
    }
  }
  
  render() {
   //short circuitoperator
   return this.state.isLoggedIn && <div>Welcome Akash</div>

    //it is used a most because we cam use JSX inside the ternary operator
    //  return(
    //     this.state.isLoggedIn?<div>Welcome akash</div>:<div>Welcome guest</div>
    //  )


    //second method
    // let message
    // if(this.state.isLoggedIn)
    //     message=<div>Welcome Akash</div>
    // else
    //     message=<div>Welcome Guest</div>
    // return <div>{message}</div>


    //first method 
    // if(this.state.isLoggedIn)
    // {
    //         return(
    //         <div>Welcome Akash</div>
    //     )
    // }
    // else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
  }
}

export default UserGreeting
