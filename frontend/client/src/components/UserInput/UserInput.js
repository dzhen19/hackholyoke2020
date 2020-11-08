import React, {useState} from 'react'
import HourInput from '../HourInput/HourInput'
import './userInput.css'

export default function UserInput(updateEnergy, state) {
    const hours = (Object.keys(state))
    return (
        <div style={{overflowY:'scroll', overflowX:'hidden', height:'80vh'}}>        
            {
                hours.map( (hour) => {
                    return HourInput(hour, state[hour], updateEnergy)
                })
            }
            
        </div>
    )
}
