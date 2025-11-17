import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
        count:0
    }
    this.handleclick=this.handleclick.bind(this)
    }
     handleclick(){
        this.setState({count:this.state.count+1})

     }
     render() {
    return (
      <div>
        <div>count={this.state.count}</div>
        <button onClick={this.handleclick.bind(this)}>count</button>
         <button onClick={()=>this.handleclick()}>count</button>
         <button onClick={this.handleclick}>count</button>

      </div>
    )
  }
}

export default Counter


//with the function component
// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1); 
//     // or: setCount(prev => prev + 1);
//   };

//   return (
//     <div>
//       <div>count = {count}</div>
//       <button onClick={handleClick}>count</button>
//     </div>
//   );
// }

// export default Counter;
