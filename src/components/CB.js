import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
export class CB extends Component {

  render() {

    return (
      <div>
       
           <UserConsumer>
          {value => (
            <h1>Hello world {value}</h1>
          )}
        </UserConsumer>
  
        
      </div>
    )
  }
}

export default CB
