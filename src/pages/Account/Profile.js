import React from "react";
import Header from "../../components/home/Header/Header";
import Footer from "../../components/home/Footer/Footer";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProfileSideNav from "../../pages/Account/ProfileSideNav";
// import ProfileData from "./pages/ProfileData";
import FooterBottom from "../../components/home/Footer/FooterBottom";
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
// import ProfileData from "./pages/ProfileData"
// import Alamat from "./pages/Alamat";
import AlamatEmpty from "./pages/AlamatEmpty";


const Profile = () => {
  // const userData = JSON.parse(localStorage.getItem('userData'));
  const location = useLocation();
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
                <div className="flex flex-col space-y-4">
                  {/* <div className="flex-col w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg pb-4">
                    <NavLink to="/profile" activeClassName="active-button">
                      <button className={`rounded-md ${location.pathname === '/profile' ? "bg-black text-white" : "bg-white text-lightText"} w-[350%] h-16 hover-bg-black hover-text-white duration-300 text-base tracking-wide`}>
                        Profil
                      </button>
                    </NavLink>
                  </div>
                  <div className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg">
                    <NavLink to="/Alamat" activeClassName="active-button">
                      <button className={`rounded-md ${location.pathname === '/alamat' ? "bg-black text-white" : "bg-white text-lightText"} w-[350%] h-16 hover-bg-black hover-text-white duration-300 text-base tracking-wide`}>
                        Alamat
                      </button>
                    </NavLink>
                  </div>
                  <div className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg pt-4">
                    <NavLink to="/pesanan" activeClassName="active-button">
                      <button className={`rounded-md ${location.pathname === '/pesanan' ? "bg-black text-white" : "bg-white text-lightText"} w-[350%] h-16 hover-bg-black hover-text-white duration-300 text-base tracking-wide`}>
                        Pesanan
                      </button>
                    </NavLink>
                  </div>
                  <div className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg pt-4">
                    <NavLink to="/logout" activeClassName="active-button">
                      <button className={`rounded-md ${location.pathname === '/logout' ? "bg-black text-white" : "bg-white text-lightText"} w-[350%] h-16 hover-bg-black hover-text-white duration-300 text-base tracking-wide`}>
                        Log Out
                      </button>
                    </NavLink>
                  </div> */}
                  <ProfileSideNav />
                </div>
              </div>
              <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
                {/* <Routes>
                  <Route path="/profile" element={<ProfileData />} />
                  <Route path="/alamat" element={<Alamat />} />
                </Routes> */}
                {/* <Alamat /> */}
                <AlamatEmpty />
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
