'use client'

import Link from 'next/link'
import { Plus, Users, TrendingUp } from 'lucide-react'
import { useState } from 'react'

// Mock data
const groupsData = [
  {
    id: 1,
    name: 'Grupo de Investimentos',
    description: 'Análise de mercado e investimentos',
    members: 234,
    activeMembers: 189,
    monthlyPrice: 29.90,
    monthlyRevenue: 5643.30,
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Análise de Ações',
    description: 'Análise técnica e fundamentalista',
    members: 156,
    activeMembers: 134,
    monthlyPrice: 19.90,
    monthlyRevenue: 2667.40,
    createdAt: '2024-02-20',
  },
  {
    id: 3,
    name: 'Crypto Trading',
    description: 'Trading em criptomoedas',
    members: 89,
    activeMembers: 67,
    monthlyPrice: 49.90,
    monthlyRevenue: 3343.30,
    createdAt: '2024-03-10',
  },
]

export default function GroupsPage() {
  const [groups, setGroups] = useState(groupsData)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meus Grupos</h1>
          <p className="text-gray-600 mt-2">Gerencie seus grupos Telegram</p>
        </div>
        <Link href="/dashboard/groups/create" className="btn-primary">
          <Plus size={20} className="inline-block mr-2" />
          Novo Grupo
        </Link>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Link
            key={group.id}
            href={`/dashboard/groups/${group.id}`}
            className="card hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 truncate">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-500 truncate mt-1">
                  {group.description}
                </p>
              </div>
              <div className="ml-2 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-blue-600" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-200">
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium">Membros</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {group.activeMembers}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  de {group.members}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium">Receita</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  R$ {group.monthlyRevenue.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  este mês
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">
                  Preço mensal
                </span>
                <span className="text-lg font-bold text-gray-900">
                  R$ {group.monthlyPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors text-sm">
                Editar
              </button>
              <button className="flex-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm">
                Análiticas
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {groups.length === 0 && (
        <div className="card text-center py-16">
          <Users size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Nenhum grupo criado
          </h3>
          <p className="text-gray-600 mb-6">
            Crie seu primeiro grupo para começar a gerenciar assinaturas
          </p>
          <Link href="/dashboard/groups/create" className="btn-primary inline-block">
            Criar Grupo
          </Link>
        </div>
      )}
    </div>
  )
}
