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
      <GotClicked 
        whoAmI={whoAmI}
      />
      {people.map(person => {
        return (
          <Who 
            key={person.id} 
            id={person.id}
            name={person.name}
            displayName={displayName}
          />
        )
      })}

    </div>
  );
}
