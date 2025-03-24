import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const AgeSurvivalChart = () => {
  // Generate data points based on the logistic regression model
  // log[p(x)/(1-p(x))] = 3.05851 - 0.02754 × age
  const generateDataPoints = () => {
    const dataPoints = [];
    // Generate points from age 20 to 90
    for (let age = 20; age <= 90; age += 5) {
      // Calculate log odds for each age
      const logOdds = 3.05851 - 0.02754 * age;
      // Convert log odds to odds
      const odds = Math.exp(logOdds);
      // Convert odds to probability
      const probability = odds / (1 + odds);
      
      dataPoints.push({
        age: age,
        probability: probability * 100 // Convert to percentage
      });
    }
    return dataPoints;
  };

  const data = generateDataPoints();
  
  // Find the age where probability crosses 50%
  const findCriticalAge = () => {
    // Solve for age when log odds = 0 (probability = 0.5)
    // 3.05851 - 0.02754 * age = 0
    // age = 3.05851 / 0.02754
    return Math.round(3.05851 / 0.02754);
  };
  
  const criticalAge = findCriticalAge();

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h2 className="text-xl font-bold mb-4">Predicted Probability of Survival by Age</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
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
            dataKey="age" 
            label={{ value: 'Age (years)', position: 'insideBottom', offset: -10 }}
            domain={[20, 90]}
            tickCount={8}
          />
          <YAxis 
            label={{ value: 'Probability of Survival (%)', angle: -90, position: 'insideLeft' }}
            domain={[0, 100]}
          />
          <Tooltip formatter={(value) => [`${value.toFixed(1)}%`, 'Probability of Survival']} />
          <Legend verticalAlign="top" height={40} />
          <ReferenceLine y={50} stroke="#FF9800" strokeDasharray="3 3" label="50% Probability" />
          <ReferenceLine x={criticalAge} stroke="#FF9800" strokeDasharray="3 3" label={{value: `Age ${criticalAge}`, position: 'insideTopRight'}} />
          <Line 
            type="monotone" 
            dataKey="probability" 
            stroke="#2196F3" 
            strokeWidth={3}
            name="Probability of Survival (%)" 
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-600">
        <p>Based on logistic regression model: log[p(x)/(1-p(x))] = 3.05851 - 0.02754 × age</p>
        <p>Odds ratio for 45 vs. 70 years: 1.99 (odds decrease by 2.7% per year)</p>
      </div>
    </div>
  );
};

export default AgeSurvivalChart;
