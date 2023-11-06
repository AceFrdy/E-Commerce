import React from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProfileSideNav from "../../pages/Account/ProfileSideNav";
import ProfileData from "./pages/ProfileData";


const Profile = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <div>
        {/* <Heading heading="Profile" /> */}
        <div>
          <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="Profile" />
            {/* ================= Products Start here =================== */}
            <div className="w-full h-full flex pb-20 gap-10">
              <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
                <div className="flex flex-col space-y-4">
                  <ProfileSideNav />
                </div>
              </div>
              <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
                {/* <Alamat /> */}
                <ProfileData/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      {/* <FooterBottom /> */}
    </div>
  );
};

export default Profile;
