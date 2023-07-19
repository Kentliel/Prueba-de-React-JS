import React, {useState} from 'react'

const Contador = () => {
    const [number, setnumber] = useState(0)
    const Summation = () => {
        setnumber(number + 1);
    }
    
    const Rest = () => {
        if (number != 0) {
            setnumber(number - 1)
        }
    }

  return (
    <div>
        <h1>Contador por botones</h1>
        <h3>{number}</h3>
        <button onClick={Summation}>+</button> 
        <button onClick={Rest}>-</button>

    </div>
  )
}

export default Contador