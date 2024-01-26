
import React,{ useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState("");

  function updateName(e){
    setName(e.target.value)
  }
  return (
    <div>
        <input type="text" placeholder="name" onChange={updateName}/>
        {name!="" ? <p>Hello {name}</p> : "" }
    </div>
  )
}

export default App
