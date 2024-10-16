import { Outlet } from "react-router-dom"
import Header from "../components/Common/Header/Header"
import Footer from "../components/Common/Footer/Footer"
import BottomMobileMenu from "../components/Common/BottomMobileMenu/BottomMobileMenu"
import BackToTopButton from "../components/Common/BackToTopButton"
import ProfileSidebar from "../components/Profile/ProfileSidebar"

const UserLayout = () => {
  return (
    <div className='main-wrapper'>
    {/* Header */}
    <Header/>
    <div className="w-full mb-10 mt-[30px]">
        <div className="section-container px-[15px] mx-auto">
          <div className="flex 992px:flex-row flex-col gap-5">
            {/* Sidebar */}
            <div className="992px:w-[22%]">
              <ProfileSidebar/>
            </div>

            {/* Profile Content */}
            <div className="992px:w-3/4">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>

    {/* Footer */}
    <Footer/>
    <BottomMobileMenu/>
    <BackToTopButton/>
</div>
  )
}

export default UserLayout