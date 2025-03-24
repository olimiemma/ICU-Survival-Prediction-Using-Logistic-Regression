import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const CPRSurvivalChart = () => {
  // Data calculated from the ICU dataset
  const data = [
    {
      name: 'No Prior CPR',
      Survived: 82.4,
      Died: 17.6,
      count: 187
    },
    {
      name: 'Prior CPR',
      Survived: 46.2,
      Died: 53.8,
      count: 13
    }
  ];

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h2 className="text-xl font-bold mb-4">Survival Rates by Prior CPR Status</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            label={{ value: 'Prior CPR Status', position: 'insideBottom', offset: -10 }} 
          />
          <YAxis 
            label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
            domain={[0, 100]}
          />
          <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
          <Legend verticalAlign="top" height={40} />
          <Bar dataKey="Survived" fill="#4CAF50" name="Survived (%)">
            <LabelList dataKey="Survived" position="top" formatter={(value) => `${value}%`} />
          </Bar>
          <Bar dataKey="Died" fill="#F44336" name="Died (%)">
            <LabelList dataKey="Died" position="top" formatter={(value) => `${value}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-600">
        <p>Sample sizes: No Prior CPR (n=187), Prior CPR (n=13)</p>
        <p>Odds ratio: 0.184 (p-value: 0.00398)</p>
      </div>
    </div>
  );
};

export default CPRSurvivalChart;
