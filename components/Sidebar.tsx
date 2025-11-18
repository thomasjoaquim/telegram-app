import Link from 'next/link'
import { 
  Home, 
  Users, 
  BarChart3, 
  CreditCard, 
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react'

interface SidebarProps {
  activeTab?: string
}

export default function Sidebar({ activeTab = 'dashboard' }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, href: '/dashboard' },
    { id: 'groups', label: 'Meus Grupos', icon: Users, href: '/dashboard/groups' },
    { id: 'members', label: 'Membros', icon: Users, href: '/dashboard/members' },
    { id: 'transactions', label: 'Transações', icon: CreditCard, href: '/dashboard/transactions' },
    { id: 'analytics', label: 'Análiticas', icon: BarChart3, href: '/dashboard/analytics' },
  ]

  const adminItems = [
    { id: 'admin', label: 'Admin', icon: Settings, href: '/admin' },
  ]

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="font-bold text-lg">TP</span>
          </div>
          <div>
            <p className="font-bold text-sm">TeleGroup</p>
            <p className="text-xs text-gray-400">Pay</p>
          </div>
        </Link>
      </div>

      {/* Menu Principal */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <p className="text-xs font-semibold text-gray-400 uppercase px-2 mb-4">
          Menu
        </p>
        
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="flex-1">{item.label}</span>
              {isActive && <ChevronRight size={16} />}
            </Link>
          )
        })}
      </nav>

      {/* Admin Menu */}
      <div className="px-4 py-6 border-t border-gray-800 space-y-2">
        <p className="text-xs font-semibold text-gray-400 uppercase px-2 mb-4">
          Admin
        </p>
        
        {adminItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="flex-1">{item.label}</span>
            </Link>
          )
        })}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-all">
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  )
}
