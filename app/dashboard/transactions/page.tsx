'use client'

import { useState } from 'react'
import { Filter, Download } from 'lucide-react'
import Table from '@/components/Table'

const transactionsData = [
  {
    id: 1,
    date: '15 Jun 2024 14:32',
    user: 'João Silva',
    group: 'Grupo de Investimentos',
    amount: 29.90,
    method: 'Pix',
    status: 'Aprovado',
    paymentId: 'PAY-001234567',
  },
  {
    id: 2,
    date: '14 Jun 2024 10:15',
    user: 'Maria Santos',
    group: 'Grupo de Investimentos',
    amount: 29.90,
    method: 'Pix',
    status: 'Aprovado',
    paymentId: 'PAY-001234568',
  },
  {
    id: 3,
    date: '13 Jun 2024 16:45',
    user: 'Pedro Costa',
    group: 'Análise de Ações',
    amount: 19.90,
    method: 'Pix',
    status: 'Pendente',
    paymentId: 'PAY-001234569',
  },
  {
    id: 4,
    date: '12 Jun 2024 09:30',
    user: 'Ana Lima',
    group: 'Grupo de Investimentos',
    amount: 29.90,
    method: 'Pix',
    status: 'Aprovado',
    paymentId: 'PAY-001234570',
  },
  {
    id: 5,
    date: '11 Jun 2024 13:20',
    user: 'Carlos Ferreira',
    group: 'Crypto Trading',
    amount: 49.90,
    method: 'Pix',
    status: 'Cancelado',
    paymentId: 'PAY-001234571',
  },
  {
    id: 6,
    date: '10 Jun 2024 11:00',
    user: 'Lucia Barbosa',
    group: 'Análise de Ações',
    amount: 19.90,
    method: 'Pix',
    status: 'Aprovado',
    paymentId: 'PAY-001234572',
  },
]

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(transactionsData)
  const [filter, setFilter] = useState('all')

  const filteredTransactions = transactions.filter((t) => {
    if (filter === 'all') return true
    return t.status.toLowerCase() === filter.toLowerCase()
  })

  const columns = [
    {
      key: 'date',
      label: 'Data',
    },
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
      render: (value: number) => `R$ ${value.toFixed(2)}`,
    },
    {
      key: 'method',
      label: 'Método',
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => {
        const colors = {
          'Aprovado': 'badge-success',
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
  ]

  // Calcular totais
  const totalRevenue = filteredTransactions
    .filter((t) => t.status === 'Aprovado')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalPending = filteredTransactions
    .filter((t) => t.status === 'Pendente')
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transações</h1>
          <p className="text-gray-600 mt-2">Histórico completo de pagamentos</p>
        </div>
        <button className="btn btn-primary">
          <Download size={20} className="inline-block mr-2" />
          Exportar
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <p className="text-sm font-medium text-gray-600">Total Aprovado</p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            R$ {totalRevenue.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {filteredTransactions.filter((t) => t.status === 'Aprovado').length} transações
          </p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-gray-600">Total Pendente</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">
            R$ {totalPending.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {filteredTransactions.filter((t) => t.status === 'Pendente').length} transações
          </p>
        </div>
        <div className="card">
          <p className="text-sm font-medium text-gray-600">Total Geral</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            R$ {(totalRevenue + totalPending).toFixed(2)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {filteredTransactions.length} transações
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <Filter size={20} className="text-gray-600" />
        <div className="flex gap-2">
          {['all', 'Aprovado', 'Pendente', 'Cancelado'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status === 'all' ? 'Todos' : status}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        data={filteredTransactions}
      />
    </div>
  )
}
