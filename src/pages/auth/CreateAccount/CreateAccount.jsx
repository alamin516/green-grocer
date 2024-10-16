import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../components/Common/Breadcrumbs'
import SEO from '../../../components/Seo'
import SignupForm from '../../../components/Auth/SignUpForm'
import Loading from '../../../components/Loading/Loading'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Verification from '../../../components/Auth/Verification'

const CreateAccount = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [route, setRoute] = useState("SignUp");

  useEffect(() => {
    if (user && user._id) {
      navigate("/");
    }
  }, [user, navigate]);

  if (user && user._id) {
    return <Loading padding="100px" classes="w-20 h-20"/>;
  }

  return (
    <>
      <SEO
        title="Create Account"
        description="Green grocer is the biggest organic online platform for people Create Account"
        keywords={[]}
        image=""
        url=""
      />

      <Breadcrumbs pageTitle="Create Account" />

      <div className="w-full mb-10">
        <div className="w-full lg:w-[66%] mx-auto px-[15px]">
          {/* Heading start*/}
          <div>
            <h1 className="page_heading lg:text-[22px] text-lg text-[#222] leading-[34px] font-bold py-1.5 tracking-[0.8] capitalize relative mb-[15px]">
              <span className="relative bg-white z-[2] pr-[25px]">{route === "SignUp" ?"Create Account" : "Verification"}</span>
              <span className="absolute top-1/2 left-0 right-auto w-full h-[3px] bg-[#f5f5f5]"></span>
            </h1>
          </div>
          {/* Heading End*/}
          {route === "SignUp" && <SignupForm navigate={navigate} setRoute={setRoute} />}
          {route === "Verification" && <Verification navigate={navigate} setRoute={setRoute} />}
        </div>
      </div>
    </>
  )
}

export default CreateAccount