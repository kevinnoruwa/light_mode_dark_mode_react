import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    
    const [mode, setMode] = React.useState( {lm: true})
    
    function handleMode(){
        return setMode((prevState) => {
  
            return !prevState
        })
       
    }

    return (
        <div className="container">
            <Navbar lightMode={mode} toggleDarkMode={handleMode}/>
            <Main lightMode={mode} />
        </div>
    )
}