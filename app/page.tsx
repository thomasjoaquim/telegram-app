'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Verificar se usuário está logado
    const token = localStorage.getItem('access_token')
    if (token) {
      router.push('/dashboard')
    } else {
      router.push('/auth/login')
    }
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">TP</span>
        </div>
        <p className="text-gray-600">Carregando...</p>
      </div>
    </div>
  )
}
