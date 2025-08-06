import { CImage } from '@coreui/react'
import LogoApp from 'src/assets/brand/LogoApp.png'

const AppBrand = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div
        style={{
          width: '35px',
          height: '35px',
          borderRadius: '5px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff', // opcional si el logo es transparente
        }}
      >
        <CImage
          src={LogoApp}
          alt="Logo"
          style={{
            width: '110%',
            height: '110%',
            objectFit: 'cover',
            transform: 'scale(0.6)',
          }}
        />
      </div>

      {/* Texto de la marca */}
      <div className="text-white" style={{ lineHeight: 1 }}>
        <span className="fw-semibold fs-4 lh-1">VENÍVÉ.</span>
        <span
          className="fst-italic d-block"
          style={{
            fontSize: '0.40rem',
            lineHeight: '1.2',
            color: 'white',
          }}
        >
          COMPANY
        </span>
      </div>
    </div>
  )
}

export default AppBrand
