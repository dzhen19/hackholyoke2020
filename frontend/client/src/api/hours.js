import React, {useState} from 'react'
import axios from 'axios'

export default function Hours() {
    const [hours, setHours] = useState([])
    axios.get('/hours').then(
        (res) => {
            setHours(res),
            // console.log(res)
        }
    )
    return (
        <div>
           {hours} 
        </div>
    )
}
