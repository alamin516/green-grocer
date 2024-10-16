import React from "react";
import SEO from "../../../components/Seo";
import ProfileContent from "../../../components/Profile/ProfileContent";


const Profile = () => {
  return (
    <>
      <SEO
        title="Profile"
        description="Manage your account settings and preferences on our e-commerce platform."
        keywords={[]}
        image=""
        url=""
      />
      
      <ProfileContent/>
    </>
  );
};

export default Profile;
