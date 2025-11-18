import { ArrowUp, ArrowDown } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  color?: 'blue' | 'green' | 'red' | 'yellow'
}

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  red: 'bg-red-50 text-red-600',
  yellow: 'bg-yellow-50 text-yellow-600',
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  color = 'blue',
}: StatsCardProps) {
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>

      {trend && (
        <div className="mt-4 flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 text-sm font-medium ${
            trend.isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.isPositive ? (
              <ArrowUp size={16} />
            ) : (
              <ArrowDown size={16} />
            )}
            {Math.abs(trend.value)}%
          </span>
          <span className="text-xs text-gray-500">vs mês anterior</span>
        </div>
      )}
    </div>
  )
}
