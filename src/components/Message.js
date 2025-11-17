import React from "react";

class Message extends React.Component{
     constructor()
        {
            super()
            this.state={
                message:"welcome visistor"
            }
        }
        handleClick(){
            this.setState({message:"subscribed"})
    
        }
    render(){
       
        return(
            <div>
                 <h1 id>{this.state.message}</h1>  
                 <button id="btn" onClick={()=>this.handleClick()}>subscribe</button>   
            </div>
        )
        
    }
}
export default Message