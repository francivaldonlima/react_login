import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const Navbar: React.FC = () => {
  const auth = useContext(AuthContext)

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        {auth?.user && <Link to="/dashboard" className="mr-4">Dashboard</Link>}
      </div>
      <div>
        {auth?.user ? (
          <>
            <span className="mr-4">Olá, {auth.user}</span>
            <button onClick={auth.logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register" className="bg-green-500 px-3 py-1 rounded">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
