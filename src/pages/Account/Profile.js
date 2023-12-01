import React from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { ProfileSideNav } from "./ProfileSideNav";
import ProfileData from "./pages/ProfileData";
import { Card, CardBody } from "@material-tailwind/react";
import HeaderProf from "../../components/home/Header/HeaderProf";
import Footer from "../../components/home/Footer/Footer"
import FooterBottom from "../../components/home/Footer/FooterBottom"

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen grid w-full">
      <div>
        <div>
          <div className="max-w-container mx-auto px-4">
            {/* ================= Profile Start here =================== */}
            <div className="w-full h-full flex pb-20 gap-10">
              <div className="lg:w-1/5 md:w-1/4 hidden md:inline-flex h-full">
                <div className="flex flex-col space-y-4">
                  <Breadcrumbs title="Profile" />
                  <ProfileSideNav />
                </div>
              </div>
              <div className="w-full lg:w-3/4 md:w-5/6 h-full flex flex-col md:gap-10">
                <HeaderProf />
                <Card className="my-8 w-full h-full">
                  <CardBody>
                    <ProfileData />
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Profile;
