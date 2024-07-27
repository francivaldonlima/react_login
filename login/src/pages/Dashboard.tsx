import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Dashboard: React.FC = () => {
  const auth = useContext(AuthContext)

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl">Dashboard</h1>
      <p className="mt-4">Bem-vindo, {auth?.user}</p>
    </div>
  )
}

export default Dashboard
