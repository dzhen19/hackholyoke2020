import React, {useState} from 'react'
import HourInput from './hourInput'

export default function userInput() {
    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    console.log(hours)
    return (
        <div>
            <ul>
                {
                    hours.map(hour => {
                        return HourInput(hour)
                    })
                }
            </ul>
        </div>
    )
}
