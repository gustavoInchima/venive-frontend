import CIcon from '@coreui/icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBoxesStacked,
  faWarehouse,
  faCartShopping,
  faChartLine,
  faCogs,
} from '@fortawesome/free-solid-svg-icons'
import { cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const sidebarNavigation = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Gestión productos',
    to: '/productManagement',
    icon: <FontAwesomeIcon icon={faBoxesStacked} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Productos',
        to: '/productManagement/product',
      },
      {
        component: CNavItem,
        name: 'Categorías',
        to: '/productManagement/category',
      },
      {
        component: CNavItem,
        name: 'Proveedores',
        to: '/productManagement/supplier',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Inventario',
    to: '/inventory',
    icon: <FontAwesomeIcon icon={faWarehouse} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bodegas',
        to: '/inventory/warehouse',
      },
      {
        component: CNavItem,
        name: 'Entradas',
        to: '/inventory/stockIn',
      },
      {
        component: CNavItem,
        name: 'Salidas',
        to: '/inventory/stockOut',
      },
      {
        component: CNavItem,
        name: 'Historial',
        to: '/inventory/history',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Ventas',
    icon: <FontAwesomeIcon icon={faCartShopping} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Clientes',
        to: '/sales/customer',
      },
      {
        component: CNavItem,
        name: 'Pedidos',
        to: '/sales/order',
      },
      {
        component: CNavItem,
        name: 'Facturas',
        to: '/sales/invoice',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Reportes',
    to: '/reports',
    icon: <FontAwesomeIcon icon={faChartLine} className="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Configuración',
    icon: <FontAwesomeIcon icon={faCogs} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Usuarios',
        to: '/settings/user',
      },
      {
        component: CNavItem,
        name: 'Seguridad',
        to: '/settings/security',
      },
      {
        component: CNavItem,
        name: 'Notificaciones',
        to: '/settings/notifications',
      },
      {
        component: CNavItem,
        name: 'Información empresa',
        to: '/settings/companyInfo',
      },
      {
        component: CNavItem,
        name: 'Contraseña',
        to: '/settings/password',
      },
    ],
  },
]

export default sidebarNavigation
