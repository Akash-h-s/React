import React from "react";
class Welcome extends React.Component{
    render(){
        return(
            <div>
                 <h1> hello {this.props.name} </h1>
                 {this.props.children}
            </div>
           
        )
        
    }
}
export default Welcome