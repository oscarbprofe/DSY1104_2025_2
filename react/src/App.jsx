import { useState, useEffect } from 'react'
import './App.css'
import UserTable from './components/UserTable'
import FormCreateUser from './components/FormCreateUser'

function App() {
  const [haveUsers, setHaveUsers] = useState(false)
  const [users, setUsers] = useState([]) //inicializando una variable de estado
  // users es la variable de estado
  // setUsers es la función que actualiza la variable de estado
  // useState([]) inicializa la variable de estado como un array vacío

  // handler para agregar un nuevo usuario al estado
  // recibe los datos del usuario desde el componente FormCreateUser
  // y actualiza el estado de users
  

  useEffect(()=>{
    if(users.length > 0){
      setHaveUsers(true)
    } else {
      setHaveUsers(false)
    }
  },[users]) 
  console.log('users',users);
  console.log('haveUsers',haveUsers);
  //return es lo que se renderiza en pantalla
  return (
    <div className="app-container">
      <h1>Gestión de Usuarios</h1>
      <FormCreateUser onUserSubmit={(userData) => 
    setUsers(prevUsers => [...prevUsers, userData])} />
      {haveUsers ? <UserTable users={users} />: 'No hay usuarios para mostrar'}
    </div>
  )
}

export default App
