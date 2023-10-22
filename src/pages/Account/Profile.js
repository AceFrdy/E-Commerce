import React from "react";
import Header from "../../components/home/Header/Header";
import Footer from "../../components/home/Footer/Footer";
// import Heading from "../../components/home/Products/Heading";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import Pagination from "../../components/pageProps/shopPage/Pagination";
// import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ProfileSideNav from "../../pages/Account/ProfileSideNav";

const Profile = () => {
    // const userData = JSON.parse(localStorage.getItem('userData'));
  return (
    <div className="">
        <Header />
      <div>
        {/* <Heading heading="Profile" /> */}
        <div>
        <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Profile" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ProfileSideNav />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
