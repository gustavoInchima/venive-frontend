import { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CButton,
  CRow,
  CCol,
} from '@coreui/react'

const CreateUserForm = ({ onSubmit, onCancel }) => {
  // Estado local para los inputs
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'User',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validaciones básicas
    if (!form.name || !form.email || !form.password) {
      alert('Please fill all required fields')
      return
    }
    onSubmit(form)
  }

  return (
    <CCard>
      <CCardHeader>
        <h4>Crear usuario</h4>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CRow className="mb-3">
            <CFormLabel htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput
                type="text"
                id="name"
                name="name"
                placeholder="Enter full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </CCol>
          </CRow>

          <CRow className="mb-4">
            <CFormLabel htmlFor="role" className="col-sm-2 col-form-label">
              Role
            </CFormLabel>
            <CCol sm={10}>
              <CFormSelect
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                {/* Puedes agregar más roles aquí */}
              </CFormSelect>
            </CCol>
          </CRow>

          <div className="d-flex justify-content-end gap-2">
            <CButton color="secondary" onClick={onCancel} type="button">
              Cancel
            </CButton>
            <CButton color="primary" type="submit">
              Save
            </CButton>
          </div>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default CreateUserForm
