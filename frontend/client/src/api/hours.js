import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Hours() {
    const [hours, setHours] = useState([])

    useEffect(
        () => {axios.get('/hours').then(
            (res) => {
                setHours(res)
            }
        )}, [])

    return (
        <div>
            {JSON.stringify(hours)}
        </div>
    )
}
