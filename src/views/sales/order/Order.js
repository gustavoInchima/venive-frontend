import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
} from '@coreui/react'

const Order = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pedidos</strong>
          </CCardHeader>
          <CCardBody>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, mollis dignissim torquent
              lectus fringilla venenatis rutrum ullamcorper, lacinia eros habitant purus mauris
              curabitur. Dictumst sociis vulputate inceptos leo
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Order
