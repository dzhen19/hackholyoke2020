import React, {useState} from 'react'
import axios from 'axios'

export default function hours() {
    axios.get('/hours').then(
        (res) => {
            console.log(res.data)
        }
    )
    return (
        <div>
            
        </div>
    )
}
