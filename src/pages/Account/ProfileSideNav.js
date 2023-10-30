import React from "react";
import { NavLink, useLocation } from 'react-router-dom';


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
          <button className={`rounded-md ${location.pathname === '/profile' ? "bg-black text-white" : "bg-white text-lightText"} w-[350%] h-16 hover-bg-black hover-text-white duration-300 text-base tracking-wide`}>
            Profil
          </button>
        </NavLink>
      </div>
      <div className="flex-col w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg pb-4">
        <NavLink to="/alamat" activeClassName="active-button">
          <button className={`rounded-md ${location.pathname === '/alamat' ? "bg-black text-white" : "bg-white text-lightText"} w-[350%] h-16 hover-bg-black hover-text-white duration-300 text-base tracking-wide`}>
            Alamat
          </button>
        </NavLink>
      </div>
      <div className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg ">
        <NavLink to="/pesanan" activeClassName="active-button">
          <button className={`rounded-md ${location.pathname === '/pesanan' ? "bg-black text-white" : "bg-white text-lightText"} w-[350%] h-16 hover-bg-black hover-text-white duration-300 text-base tracking-wide`}>
            Pesanan
          </button>
        </NavLink>
      </div>
      <div className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg pt-4">
        <NavLink to="/" activeClassName="active-button">
          <button className={`rounded-md ${location.pathname === '/' ? "bg-black text-white" : "bg-white text-lightText"} w-[350%] h-16 hover-bg-black hover-text-white duration-300 text-base tracking-wide`}>
            Log Out
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileSideNav;
