'use client'

import { useState } from 'react'
import { ArrowLeft, Edit2, Trash2, Users, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Table from '@/components/Table'
import Chart from '@/components/Chart'

const groupData = {
  id: 1,
  name: 'Grupo de Investimentos',
  description: 'Análise de mercado e investimentos',
  members: 234,
  activeMembers: 189,
  monthlyPrice: 29.90,
  monthlyRevenue: 5643.30,
  createdAt: '2024-01-15',
}

const membersData = [
  {
    id: 1,
    name: 'João Silva',
    username: '@joaosilva',
    status: 'Ativo',
    joinedAt: '2024-01-20',
  },
  {
    id: 2,
    name: 'Maria Santos',
    username: '@mariasantos',
    status: 'Ativo',
    joinedAt: '2024-02-15',
  },
  {
    id: 3,
    name: 'Pedro Costa',
    username: '@pedrocosta',
    status: 'Expirado',
    joinedAt: '2024-03-10',
  },
  {
    id: 4,
    name: 'Ana Lima',
    username: '@analima',
    status: 'Ativo',
    joinedAt: '2024-04-05',
  },
]

const chartData = [
  { name: 'Jan', members: 45, revenue: 1345.50 },
  { name: 'Fev', revenue: 1495.80, members: 50 },
  { name: 'Mar', revenue: 1793.70, members: 60 },
  { name: 'Abr', revenue: 2245.60, members: 75 },
  { name: 'Mai', revenue: 2686.75, members: 89 },
  { name: 'Jun', revenue: 5643.30, members: 189 },
]

export default function GroupDetailsPage({ params }: { params: { id: string } }) {
  const [group, setGroup] = useState(groupData)

  const membersColumns = [
    { key: 'name', label: 'Nome' },
    { key: 'username', label: 'Username' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => {
        const colors = {
          'Ativo': 'badge-success',
          'Expirado': 'badge-error',
          'Pendente': 'badge-warning',
        } as any
        return (
          <span className={`badge ${colors[value] || 'badge-info'}`}>
            {value}
          </span>
        )
      },
    },
    { key: 'joinedAt', label: 'Data de Entrada' },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link href="/dashboard/groups" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft size={20} />
          Voltar
        </Link>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{group.name}</h1>
            <p className="text-gray-600 mt-2">{group.description}</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-secondary btn-small">
              <Edit2 size={16} className="inline-block mr-1" />
              Editar
            </button>
            <button className="btn btn-danger btn-small">
              <Trash2 size={16} className="inline-block mr-1" />
              Deletar
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <p className="text-sm font-medium text-gray-600">Membros Ativos</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{group.activeMembers}</p>
          <p className="text-xs text-gray-500 mt-1">de {group.members} total</p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-gray-600">Preço Mensal</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">R$ {group.monthlyPrice}</p>
          <p className="text-xs text-gray-500 mt-1">por assinante</p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-gray-600">Receita Mensal</p>
          <p className="text-3xl font-bold text-green-600 mt-2">R$ {group.monthlyRevenue.toFixed(2)}</p>
          <p className="text-xs text-gray-500 mt-1">este mês</p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-gray-600">Criado em</p>
          <p className="text-lg font-bold text-gray-900 mt-2">
            {new Date(group.createdAt).toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          data={chartData}
          title="Crescimento de Membros"
          type="line"
          lines={[
            { key: 'members', name: 'Membros', color: '#0ea5e9' },
          ]}
        />

        <Chart
          data={chartData}
          title="Receita Mensal"
          type="bar"
          lines={[
            { key: 'revenue', name: 'Receita (R$)', color: '#10b981' },
          ]}
        />
      </div>

      {/* Members */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Membros do Grupo</h2>
        <Table
          columns={membersColumns}
          data={membersData}
        />
      </div>
    </div>
  )
}
