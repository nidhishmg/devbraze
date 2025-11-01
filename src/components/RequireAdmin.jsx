import React from 'react'
import { Navigate } from 'react-router-dom'

const isAuthed = () => typeof window !== 'undefined' && localStorage.getItem('DB_ADMIN_AUTH') === '1'

const RequireAdmin = ({ children }) => {
  if (!isAuthed()) {
    return <Navigate to="/admin/login" replace />
  }
  return children
}

export default RequireAdmin
