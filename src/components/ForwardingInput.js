import React from 'react'

 const ForwardingInput=React.forwardRef((props,ref)=>{
    return(
        <input type="text" ref={ref}/>
    )

 })

export default ForwardingInput
