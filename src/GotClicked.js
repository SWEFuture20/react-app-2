import React from "react";

function GotClicked(props){
  return(
    <div>
      <h2>Who got clicked?</h2>
      <p className="who-am-i">{props.whoAmI}</p>
    </div>
  )
}
export default GotClicked;