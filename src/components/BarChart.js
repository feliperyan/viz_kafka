import React, { PropTypes } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Bar, Tooltip, Legend } from 'recharts';


const BarChartComponent = ({data}) => {

    return (
    	<BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="returning" fill="#8884d8" />
       <Bar dataKey="new" fill="#82ca9d" />
      </BarChart>

    )

}

export default BarChartComponent;