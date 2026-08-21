import React from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { ProfileSideNav } from "./ProfileSideNav";
import ProfileData from "./pages/ProfileData";

const Profile = () => {
  return (
    <div className="max-w-container mx-auto px-4 py-6">
      <Breadcrumbs title="Profile" />
      <div className="w-full flex flex-col md:flex-row pb-20 gap-8">
        <div className="w-full md:w-1/4">
          <ProfileSideNav />
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
            <ProfileData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
