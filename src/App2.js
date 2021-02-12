import React, {useState} from "react";
import "./style.css";
import Who from './Who'
import GotClicked from './GotClicked'
import people from './people.json'

export default function App() {
  const  [whoAmI, setWhoAmI ] = useState("")

  const displayName = (name) => {
    setWhoAmI(name)
  }

  return (
    <div>
      <Who 
        name="Sam" id={1} displayName={displayName}
      />
      <Who 
        name="Peter" id={2} displayName={displayName}
      />
      <GotClicked 
        whoAmI={whoAmI}
      />
    </div>
  );
}
