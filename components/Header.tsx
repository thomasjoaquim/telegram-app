import Link from 'next/link'
import { Menu, LogOut, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TP</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">
              TeleGroup Pay
            </span>
          </Link>

          {/* Right side - User menu */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">João Silva</p>
                <p className="text-xs text-gray-500">@joaosilva</p>
              </div>
            </div>

            {/* Dropdown menu */}
            <div className="hidden sm:flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <User size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <LogOut size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Mobile menu */}
            <button className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition">
              <Menu size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
