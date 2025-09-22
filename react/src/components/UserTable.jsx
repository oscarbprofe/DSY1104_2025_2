
function UserTable({ users }) {
  
  return (
    <div className="user-table">
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.correo}</td>
              <td>{user.pais}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
