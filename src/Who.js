import React from "react";

function Who(props){
  return(
    <div>
      <p>My number is: {props.id}</p>
      <button onClick={()=>props.displayName(props.name)}>
        Who Am I
      </button>
    </div>
  )
}
export default Who;