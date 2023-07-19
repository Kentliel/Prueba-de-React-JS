import React, { useState } from 'react'

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
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='font-bold text-2xl'>Contador por botones</h1>
            <h3 className='font-semibold text-base'>{number}</h3>
            <div className='flex gap-2 justify-center'>
                <button className='border-2 px-2 py-1 bg-green-500 rounded' onClick={Summation}><span className='font-bold text-lg'>+</span> Incrementar</button>
                <button className='border-2 px-2 py-1 bg-red-500 rounded' onClick={Rest}><span className='font-bold text-lg'>-</span> Disminuir</button>
            </div>

        </div>
    )
}

export default Contador