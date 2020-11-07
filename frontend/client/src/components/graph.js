import React, {useState} from 'react'

export default function Graph() {
    const generateDataset = () => (
        Array(10).fill(0).map(() => ([
        Math.random() * 80 + 10,
        Math.random() * 35 + 10,
        ]))
    )

    const Circles = () => {
        const [data, setData] = useState(generateDataset())
        return (
        <svg viewBox = '0 0 100 50'>
            {data.map(([x, y], i) => (
                <circle
                cx={x}
                cy={y}
                r='3'
                />
            ))}
        </svg>
        )
    }

    return (
        <div>
        {Circles()}
        </div>
    )
}
