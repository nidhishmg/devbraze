import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { Lock, User } from 'lucide-react'

const AdminLogin = () => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // If already authed, go straight to admin list
    if (localStorage.getItem('DB_ADMIN_AUTH') === '1') {
      navigate('/admin/events', { replace: true })
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')
    // Fixed credentials per request
    if (userId === 'MESSI2006' && password === 'messiisgoat') {
      localStorage.setItem('DB_ADMIN_AUTH', '1')
      navigate('/admin/events', { replace: true })
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen bg-navy text-light">
      <Navbar />
      <section className="pt-24 pb-12">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Admin Login</h1>

          <form onSubmit={onSubmit} className="bg-slate/20 border border-slate/20 rounded-xl p-6 space-y-5">
            <div>
              <label className="block text-sm text-light/70 mb-1">User ID</label>
              <div className="flex items-center bg-slate/10 rounded-lg border border-slate/30">
                <User className="h-4 w-4 text-cyan ml-3" />
                <input value={userId} onChange={(e) => setUserId(e.target.value)} className="w-full bg-transparent px-3 py-2 outline-none" placeholder="Enter User ID" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-light/70 mb-1">Password</label>
              <div className="flex items-center bg-slate/10 rounded-lg border border-slate/30">
                <Lock className="h-4 w-4 text-cyan ml-3" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent px-3 py-2 outline-none" placeholder="Enter Password" />
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-cyan to-blue-500 hover:from-cyan/90 hover:to-blue-500/90 text-white py-3 rounded-lg font-semibold">
              Sign In
            </button>

            {error && <div className="text-red-400 text-sm">{error}</div>}
          </form>
        </div>
      </section>
    </div>
  )
}

export default AdminLogin
