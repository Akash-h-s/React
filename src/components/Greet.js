import React from "react";
function Greet(props){
    return (
        <div>
            <h1>hello {props.name} </h1>
            {props.children}
        </div>
        
    )
    
}
export default Greet