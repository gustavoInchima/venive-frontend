import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const History = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Historial</strong>
          </CCardHeader>
          <CCardBody>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, mollis dignissim torquent
              lectus fringilla venenatis rutrum ullamcorper, lacinia eros habitant purus mauris
              curabitur.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default History
