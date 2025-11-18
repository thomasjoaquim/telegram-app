'use client'

import { Users, TrendingUp, DollarSign, CreditCard } from 'lucide-react'
import StatsCard from '@/components/StatsCard'
import Chart from '@/components/Chart'
import Table from '@/components/Table'

// Mock data
const statsData = [
  {
    title: 'Membros Ativos',
    value: '1,234',
    subtitle: '+45 este mês',
    icon: <Users size={24} />,
    trend: { value: 12, isPositive: true },
    color: 'blue' as const,
  },
  {
    title: 'Faturamento',
    value: 'R$ 5,432.00',
    subtitle: 'Este mês',
    icon: <DollarSign size={24} />,
    trend: { value: 8, isPositive: true },
    color: 'green' as const,
  },
  {
    title: 'Crescimento',
    value: '23%',
    subtitle: 'Mês anterior: 18%',
    icon: <TrendingUp size={24} />,
    trend: { value: 5, isPositive: true },
    color: 'yellow' as const,
  },
  {
    title: 'Assinaturas',
    value: '89',
    subtitle: '+12 este mês',
    icon: <CreditCard size={24} />,
    trend: { value: 3, isPositive: false },
    color: 'red' as const,
  },
]

const chartData = [
  { name: 'Jan', revenue: 4000, members: 120 },
  { name: 'Fev', revenue: 5200, members: 145 },
  { name: 'Mar', revenue: 4800, members: 160 },
  { name: 'Abr', revenue: 6100, members: 185 },
  { name: 'Mai', revenue: 7200, members: 210 },
  { name: 'Jun', revenue: 5432, members: 234 },
]

const transactionData = [
  {
    id: 1,
    user: 'João Silva',
    group: 'Grupo de Investimentos',
    amount: 'R$ 29.90',
    status: 'Pago',
    date: '15 Jun 2024',
  },
  {
    id: 2,
    user: 'Maria Santos',
    group: 'Grupo de Investimentos',
    amount: 'R$ 29.90',
    status: 'Pago',
    date: '14 Jun 2024',
  },
  {
    id: 3,
    user: 'Pedro Costa',
    group: 'Análise de Ações',
    amount: 'R$ 19.90',
    status: 'Pendente',
    date: '13 Jun 2024',
  },
  {
    id: 4,
    user: 'Ana Lima',
    group: 'Grupo de Investimentos',
    amount: 'R$ 29.90',
    status: 'Pago',
    date: '12 Jun 2024',
  },
  {
    id: 5,
    user: 'Carlos Ferreira',
    group: 'Análise de Ações',
    amount: 'R$ 19.90',
    status: 'Cancelado',
    date: '11 Jun 2024',
  },
]

const transactionColumns = [
  {
    key: 'user',
    label: 'Usuário',
  },
  {
    key: 'group',
    label: 'Grupo',
  },
  {
    key: 'amount',
    label: 'Valor',
  },
  {
    key: 'status',
    label: 'Status',
    render: (value: string) => {
      const colors = {
        'Pago': 'badge-success',
        'Pendente': 'badge-warning',
        'Cancelado': 'badge-error',
      } as any
      return (
        <span className={`badge ${colors[value] || 'badge-info'}`}>
          {value}
        </span>
      )
    },
  },
  {
    key: 'date',
    label: 'Data',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Bem-vindo de volta! Aqui está o resumo do seu negócio.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          data={chartData}
          title="Faturamento vs Membros"
          type="line"
          lines={[
            { key: 'revenue', name: 'Faturamento (R$)', color: '#0ea5e9' },
            { key: 'members', name: 'Membros', color: '#10b981' },
          ]}
        />

        <Chart
          data={chartData}
          title="Crescimento Mensal"
          type="bar"
          lines={[
            { key: 'revenue', name: 'Faturamento', color: '#0ea5e9' },
          ]}
        />
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Transações Recentes</h2>
        <Table
          columns={transactionColumns}
          data={transactionData}
        />
      </div>
    </div>
  )
}
