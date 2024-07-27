import React, { createContext, useState, useEffect } from 'react'

interface AuthContextType {
  user: string | null
  login: (user: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user'))

  const login = (user: string) => {
    localStorage.setItem('user', user)
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
