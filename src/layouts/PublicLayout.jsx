import BackToTopButton from '../components/Common/BackToTopButton'
import Footer from '../components/Common/Footer/Footer'
import Header from '../components/Common/Header/Header'
import { Outlet } from 'react-router-dom'
import Newsletter from '../components/Common/Newsletter'

const PublicLayout = () => {
  return (
    <div className='main-wrapper'>
        {/* Header */}
        <Header/>
        {/* Page Content */}
        <div className='page-content'>
            <Outlet/>
        </div>
        <Newsletter/>
        {/* Footer */}
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default PublicLayout