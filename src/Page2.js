import React, { Component } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import "./App.css";

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];


class Page2 extends Component {
  state = {};

  render() {
    
    return (
      <div>
        <h3 style={{ border: "1px solid blue" }}>Second Page Data</h3>
        <button onClick={this.props.pageHandler}>Go to Page 1</button>
        
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

export default Page2;
