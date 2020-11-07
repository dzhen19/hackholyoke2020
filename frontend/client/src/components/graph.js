import React, {useState} from 'react'

export default function Graph() {
    const generateDataset = () => (
        Array(10).fill(0).map(() => ([
        Math.random() * 20 + 10,
        Math.random() * 7 + 10,
        ]))
    )

    const Circles = () => {
        const [data, setData] = useState(generateDataset())
        return (
        <svg viewBox = '0 0 50 50'>
            {data.map(([x, y], i) => (
                <circle
                cx={x}
                cy={y}
                r='1'
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
