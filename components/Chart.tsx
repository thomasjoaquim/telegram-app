'use client'

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ChartProps {
  data: any[]
  title: string
  type?: 'line' | 'bar'
  lines?: Array<{
    key: string
    name: string
    color: string
  }>
}

export default function Chart({
  data,
  title,
  type = 'line',
  lines = [
    { key: 'value', name: 'Valor', color: '#0ea5e9' },
  ],
}: ChartProps) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        {type === 'line' ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="name" 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            {lines.map((line) => (
              <Line
                key={line.key}
                type="monotone"
                dataKey={line.key}
                name={line.name}
                stroke={line.color}
                strokeWidth={2}
                dot={{ fill: line.color, r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="name" 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            {lines.map((line) => (
              <Bar
                key={line.key}
                dataKey={line.key}
                name={line.name}
                fill={line.color}
              />
            ))}
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}
