import React from 'react'
import './style.css'
import { InputGroup, FormControl } from 'react-bootstrap'

export default function HourInput(hour) {
    return (
        <div>
            <label>Hour {hour}:</label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="energy">Energy</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Fill in a number from 1 - 10"
                type="number"
                />
            </InputGroup>

        </div>
        
    )
}
