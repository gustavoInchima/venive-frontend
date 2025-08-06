import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CCol,
  CRow,
  CButton,
} from '@coreui/react'

import ToggleSwitch from '../../../components/common/ToggleSwitch'

const CreateRole = () => {
  return (
    <CRow>
      <CCol md={6}>
        <CCard className="border-info">
          <CCardHeader className="bg-info text-white">
            <h4 className="mb-0">Crear Rol</h4>
          </CCardHeader>

          <CForm>
            <CCardBody>
              {/* Campo: Nombre del Rol */}
              <div className="mb-4">
                <label htmlFor="roleName" className="form-label fw-semibold">
                  Nombre del Rol
                </label>
                <CFormInput
                  type="text"
                  id="roleName"
                  name="roleName"
                  placeholder="Nombre del Rol"
                  defaultValue="Administrador"
                  required
                />
              </div>

              {/* Permisos */}
              <div className="mb-3">
                <h5 className="fw-bold">Permisos</h5>

                {/* Inventario */}
                <div className="mb-3">
                  <h6 className="text-muted">Inventario</h6>
                  {[
                    { id: 'inventoryCategories', label: 'Categorías' },
                    { id: 'inventoryProducts', label: 'Productos' },
                    { id: 'inventorySuppliers', label: 'Proveedores' },
                  ].map(({ id, label }) => (
                    <ToggleSwitch key={id} id={id} label={label} defaultChecked />
                  ))}
                </div>

                {/* Movimientos de Inventario */}
                <div className="mb-3">
                  <h6 className="text-muted">Gestión de Movimientos de Inventario</h6>
                  {[
                    { id: 'inventoryReceipts', label: 'Recepciones' },
                    { id: 'inventoryShipments', label: 'Despachos' },
                  ].map(({ id, label }) => (
                    <ToggleSwitch key={id} id={id} label={label} defaultChecked />
                  ))}
                </div>

                {/* Gestión de Usuarios */}
                <div className="mb-3">
                  <h6 className="text-muted">Gestión de Usuarios</h6>
                  {[
                    { id: 'userRoles', label: 'Gestión de Roles' },
                    { id: 'userUsers', label: 'Usuarios' },
                  ].map(({ id, label }) => (
                    <ToggleSwitch key={id} id={id} label={label} defaultChecked />
                  ))}
                </div>

                {/* Reportes */}
                <div className="mb-3">
                  <h6 className="text-muted">Reportes</h6>
                  {[
                    { id: 'reportInventory', label: 'Informes de Inventario' },
                    { id: 'reportSales', label: 'Informes de Ventas' },
                    { id: 'reportPurchases', label: 'Informes de Compras' },
                  ].map(({ id, label }) => (
                    <ToggleSwitch key={id} id={id} label={label} defaultChecked />
                  ))}
                </div>

                {/* Configuración */}
                <div className="mb-3">
                  <h6 className="text-muted">Configuración</h6>
                  {[
                    { id: 'configCompanyInfo', label: 'Información de la Empresa' },
                    { id: 'configSystemPrefs', label: 'Preferencias del Sistema' },
                    { id: 'configUserSettings', label: 'Ajustes de Usuario' },
                  ].map(({ id, label }) => (
                    <ToggleSwitch key={id} id={id} label={label} defaultChecked />
                  ))}
                </div>
              </div>
            </CCardBody>

            <div className="card-footer d-flex justify-content-end gap-2">
              <CButton color="primary" type="submit">
                Guardar
              </CButton>
              <CButton color="secondary" type="reset">
                Cancelar
              </CButton>
            </div>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CreateRole
