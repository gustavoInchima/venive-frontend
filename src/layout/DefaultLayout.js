import AppSidebar from '../components/layout/AppSidebar'
import AppFooter from '../components/layout/AppFooter'
import AppContent from '../components/layout/AppContent'
import AppHeader from '../components/layout/header/AppHeader'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
