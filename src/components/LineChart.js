import React, { PropTypes } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from 'recharts';


const LineChartComponent = ({data}) => {

    return (
        <LineChart width={600} height={300} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    )

}

export default LineChartComponent;