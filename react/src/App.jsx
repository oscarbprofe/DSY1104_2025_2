import { useState } from 'react'
import './App.css'
import UserTable from './components/UserTable'
import FormCreateUser, { suma } from './components/FormCreateUser'

function App() {
  const [users, setUsers] = useState([])

  const handleNewUser = (userData) => {
    setUsers(prevUsers => [...prevUsers, userData])
  }

  return (
    <div className="app-container">
      <h1>Gestión de Usuarios</h1>
      <p>{suma(13,7)}</p>
      <FormCreateUser onUserSubmit={handleNewUser} />
      <UserTable users={users} />
    </div>
  )
}

export default App
