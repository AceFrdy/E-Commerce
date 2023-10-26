import React from "react";
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import ProfileData from "./pages/ProfileData"
import Alamat from "./pages/Alamat";

function ProfileSideNav() {
  const location = useLocation();
  // const navigate = useNavigate();

  // const navigateProfile = () => {
  //   navigate('/profile');
  // };

  // const navigateAlamat = () => {
  //   navigate('/alamat');
  // };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex-col w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg pb-4">
      <NavLink to="/profile" activeClassName="active-button">
          <button className={`rounded-md ${location.pathname === '/pesanan' ? "bg-black text-white" : "bg-white text-lightText"} w-[350%] h-16 hover-bg-black hover-text-white duration-300 text-base tracking-wide`}>
            Profil
          </button>
        </NavLink>
      </div>
      <div className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg">
        <NavLink to="/Alamat" activeClassName="active-button">
          <button className={`rounded-md ${location.pathname === '/pesanan' ? "bg-black text-white" : "bg-white text-lightText"} w-[350%] h-16 hover-bg-black hover-text-white duration-300 text-base tracking-wide`}>
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
      </div>
      <Routes>
        <Route path="/profile" element={<ProfileData />} />
        <Route path="/alamat" element={<Alamat />} />
      </Routes>
    </div>
  );
};

export default ProfileSideNav;
