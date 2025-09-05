import React from 'react'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'
import './Chart.css'


export default function Chart({ title, data, datakey, grid }) {
    return (
        <div className='chartm pt-3' >
            <h5>{title}</h5>
            <ResponsiveContainer width="100%">
                <LineChart data={data}>
                    <Line type="monotone" dataKey={datakey} stroke="#5550bd"></Line>
                    <XAxis dataKey="month" stroke="#5550bd"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10"></CartesianGrid>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
