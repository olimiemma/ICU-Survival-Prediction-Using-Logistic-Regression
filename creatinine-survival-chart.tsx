import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const CreatinineSurvivalChart = () => {
  // Data calculated from the ICU dataset
  const data = [
    {
      name: 'Normal/Moderate\n(≤ 2.0 mg/dL)',
      Survived: 81.6,
      Died: 18.4,
      count: 190
    },
    {
      name: 'Elevated\n(> 2.0 mg/dL)',
      Survived: 50.0,
      Died: 50.0,
      count: 10
    }
  ];

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h2 className="text-xl font-bold mb-4">Survival Rates by Creatinine Level</h2>
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
            label={{ value: 'Creatinine Level', position: 'insideBottom', offset: -10 }}
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
        <p>Sample sizes: Normal/Moderate Creatinine (n=190), Elevated Creatinine (n=10)</p>
        <p>Odds ratio: 0.226 (p-value: 0.0241)</p>
      </div>
    </div>
  );
};

export default CreatinineSurvivalChart;
