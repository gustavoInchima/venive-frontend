import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CRow,
} from '@coreui/react'

const CompanyInfo = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Información de la empresa</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-4">
              {/* 1. Identificación fiscal */}
              <CCol xs={12}>
                <h5>Identificación fiscal</h5>
              </CCol>

              <CCol md={6}>
                <CFormSelect id="documentType" label="Tipo de documento">
                  <option value="">Selecciona una opción</option>
                  <option value="NIT">NIT</option>
                  <option value="CC">Cédula de ciudadanía</option>
                  <option value="CE">Cédula de extranjería</option>
                </CFormSelect>
              </CCol>

              <CCol md={6}>
                <CFormInput id="documentNumber" label="Número de documento" />
              </CCol>

              <CCol md={6}>
                <CFormInput type="text" id="companyName" label="Nombre de la empresa" />
              </CCol>

              {/* 2. Información de contacto */}
              <CCol xs={12}>
                <h5>Contacto</h5>
              </CCol>

              <CCol md={6}>
                <CFormInput type="email" id="email" label="Correo electrónico de contacto" />
              </CCol>

              <CCol md={6}>
                <CFormInput type="text" id="phone" label="Teléfono" />
              </CCol>

              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="website"
                  label="Sitio web (opcional)"
                  placeholder="https://..."
                />
              </CCol>

              {/* 3. Dirección */}
              <CCol xs={12}>
                <h5>Dirección</h5>
              </CCol>

              <CCol xs={12}>
                <CFormInput
                  id="address"
                  label="Dirección fiscal"
                  placeholder="Ej. Calle 123 #45-67"
                />
              </CCol>

              <CCol md={6}>
                <CFormInput id="city" label="Ciudad" />
              </CCol>

              <CCol md={4}>
                <CFormSelect id="department" label="Departamento">
                  <option value="">Selecciona un departamento</option>
                  <option value="Antioquia">Antioquia</option>
                  <option value="Bogotá D.C.">Bogotá D.C.</option>
                  <option value="Valle del Cauca">Valle del Cauca</option>
                  <option value="Atlántico">Atlántico</option>
                </CFormSelect>
              </CCol>

              <CCol md={2}>
                <CFormInput id="postalCode" label="Código postal" />
              </CCol>

              <CCol xs={12}>
                <h5>Configuración</h5>
              </CCol>

              <CCol md={6}>
                <CFormSelect id="currency" label="Moneda principal">
                  <option value="COP">COP - Peso colombiano</option>
                  <option value="USD">USD - Dólar estadounidense</option>
                </CFormSelect>
              </CCol>

              <CCol md={6}>
                <CFormSelect id="timezone" label="Zona horaria">
                  <option value="America/Bogota">America/Bogotá (UTC-5)</option>
                </CFormSelect>
              </CCol>

              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Guardar
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CompanyInfo
