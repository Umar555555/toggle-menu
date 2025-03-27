import './App.css'
import { useState } from 'react'

let App = () => {
    const [trued, settrued] = useState(false)

    const truedFunction = () => {
        settrued((prev) => !prev)
    }

    return(
        <div>
            <input type={`${trued ? "text" : "password"}`} />
            <button onClick={truedFunction}>{trued ? "hide" : "show"}</button>
        </div>        
    )
}



export default App