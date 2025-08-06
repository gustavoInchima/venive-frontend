import {
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CCard,
  CCardBody,
  CRow,
  CCol,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'

const UsersTable = () => {
  // Datos estáticos de ejemplo
  const users = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'Admin' },
    { id: 2, name: 'Ana Gómez', email: 'ana@example.com', role: 'User' },
    { id: 3, name: 'Luis Martínez', email: 'luis@example.com', role: 'User' },
  ]

  const handleCreate = () => {
    alert('Crear usuario')
  }

  const handleEdit = (id) => {
    alert(`Editar usuario con id ${id}`)
  }

  const handleDelete = (id) => {
    alert(`Eliminar usuario con id ${id}`)
  }

  return (
    <CCard>
      <CCardBody>
        {/* Barra de acciones */}
        <CRow className="mb-3">
          <CCol>
            <h4>Usuarios</h4>
          </CCol>
          <CCol className="text-end">
            <CButton color="primary" onClick={handleCreate}>
              Crear Usuario
            </CButton>
          </CCol>
        </CRow>

        {/* Tabla */}
        <CTable striped hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell>ID</CTableHeaderCell>
              <CTableHeaderCell>Nombre</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>
              <CTableHeaderCell>Rol</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Acciones</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {users.map((user) => (
              <CTableRow key={user.id}>
                <CTableDataCell>{user.id}</CTableDataCell>
                <CTableDataCell>{user.name}</CTableDataCell>
                <CTableDataCell>{user.email}</CTableDataCell>
                <CTableDataCell>{user.role}</CTableDataCell>
                <CTableDataCell className="text-center">
                  <CButton
                    color="info"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(user.id)}
                    title="Editar"
                  >
                    <CIcon icon={cilPencil} />
                  </CButton>
                  <CButton
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(user.id)}
                    title="Eliminar"
                  >
                    <CIcon icon={cilTrash} />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default UsersTable
