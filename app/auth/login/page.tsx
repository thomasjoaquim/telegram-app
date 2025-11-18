'use client'

import { useState } from 'react'
import { Mail, Lock, Github } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTelegramLogin = () => {
    // Redirecionar para login do Telegram
    window.location.href = `https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME}`
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // TODO: Implementar login com email
      console.log('Login com email:', { email, password })
    } catch (err) {
      setError('Erro ao fazer login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-3xl">TP</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">TeleGroup Pay</h1>
            <p className="text-gray-500 mt-2">Gerencie suas assinaturas</p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Telegram Login */}
          <button
            onClick={handleTelegramLogin}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all mb-6"
          >
            <Github size={20} />
            Entrar com Telegram
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ou</span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="input pl-10"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input pl-10"
                  required
                />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-gray-700">Lembrar-me</span>
              </label>
              <Link href="/auth/forgot" className="text-blue-600 hover:text-blue-700 font-medium">
                Esqueceu a senha?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary mt-6"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Não tem conta?{' '}
            <Link href="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Criar conta
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-white text-sm mt-8">
          Plataforma de assinaturas para grupos Telegram
        </p>
      </div>
    </div>
  )
}
