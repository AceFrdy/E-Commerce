import React from "react";
// import Brand from "./shopBy/Brand";
// import Category from "./shopBy/Category";
// import Color from "./shopBy/Color";
// import Price from "./shopBy/Price";
import Profile from "./Profile";

const ProfileSideNav = () => {
  return (
    <div className="flex flex-col space-y-4 ">
      <div className="flex-col w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg pb-4">
        <button
          onClick={''}
          className="rounded-md bg-black text-white w-[350%] h-16 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
        >
          Profile
        </button>
      </div>
      <div className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg pt-4">
      <button
          onClick={''}
          className="rounded-md bg-white text-lightText w-[350%] h-16 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
        >
          Alamat
        </button>
      </div>
      <div className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg pt-4">
      <button
          onClick={''}
          className="rounded-md bg-white text-lightText w-[350%] h-16 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
        >
          Pesanan
        </button>
      </div>
      <div className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg pt-4">
      <button
          onClick={''}
          className="rounded-md bg-white text-lightText w-[350%] h-16 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileSideNav;
