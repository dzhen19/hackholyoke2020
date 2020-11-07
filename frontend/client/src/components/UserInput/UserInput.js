import React, {useState} from 'react'
import HourInput from '../HourInput/HourInput'
import './style.css'

export default function UserInput() {
    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    return (
        <div>
        
            {
                hours.map(hour => {
                    return HourInput(hour)
                })
            }
            
        </div>
    )
}
