import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// ProductManagement
const Product = React.lazy(() => import('./views/productManagement/product/Product'))
const Category = React.lazy(() => import('./views/productManagement/category/Category'))
const Supplier = React.lazy(() => import('./views/productManagement/supplier/Supplier'))

// Inventory
const Warehouse = React.lazy(() => import('./views/inventory/warehouse/Warehouse'))
const StockIn = React.lazy(() => import('./views/inventory/stockIn/StockIn'))
const StockOut = React.lazy(() => import('./views/inventory/stockOut/stockOut'))
const History = React.lazy(() => import('./views/inventory/history/History'))

// Sales
const Customer = React.lazy(() => import('./views/sales/customer/Customer'))
const Order = React.lazy(() => import('./views/sales/order/Order'))
const Invoice = React.lazy(() => import('./views/sales/invoice/Invoice'))

// Reports
const Report = React.lazy(() => import('./views/report/Report'))

// Settings
const User = React.lazy(() => import('./views/settings/user/User'))
const Security = React.lazy(() => import('./views/settings/security/Security'))
const Notifications = React.lazy(() => import('./views/settings/notifications/Notifications'))
const ConpmanyInfo = React.lazy(() => import('./views/settings/companyInfo/CompanyInfo'))
const Password = React.lazy(() => import('./views/settings/password/Password'))

const routes = [
  { path: '/', exact: true, name: 'Inicio' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/productManagement', name: ' Gestión productos', element: Product, exact: true },
  { path: '/productManagement/product', name: 'Productos', element: Product },
  { path: '/productManagement/category', name: 'Categorías', element: Category },
  { path: '/productManagement/supplier', name: 'Proveedores', element: Supplier },
  { path: '/inventory', name: 'Inventario', element: Product, exact: true },
  { path: '/inventory/warehouse', name: 'Bodega', element: Warehouse },
  { path: '/inventory/stockIn', name: 'Entradas', element: StockIn },
  { path: '/inventory/stockOut', name: 'Salidas', element: StockOut },
  { path: '/inventory/history', name: 'Historial', element: History },
  { path: '/sales', name: 'Ventas', element: Order, exact: true },
  { path: '/sales/customer', name: 'Clientes', element: Customer },
  { path: '/sales/order', name: 'Ordenes', element: Order },
  { path: '/sales/invoice', name: 'Facturas', element: Invoice },
  { path: '/reports', name: 'Reportes', element: Report, exact: true },
  { path: '/settings', name: 'Configuración', element: User, exact: true },
  { path: '/settings/user', name: 'Usuarios', element: User },
  { path: '/settings/security', name: 'Seguridad', element: Security },
  { path: '/settings/notifications', name: 'Notificaciones', element: Notifications },
  { path: '/settings/companyInfo', name: 'Información de la empresa', element: ConpmanyInfo },
  { path: '/settings/password', name: 'Contraseña', element: Password },
]

export default routes
