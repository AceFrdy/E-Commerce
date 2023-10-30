import React from "react";
import ProfileSideNav from "../ProfileSideNav";
import Breadcrumbs from "../../../components/pageProps/Breadcrumbs";
import { NavLink, useLocation } from "react-router-dom";

const Alamat = () => {
  const location = useLocation();
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
                <div>
                  <h1 className="text-xl font-semibold flex items-center mb-2">Alamat</h1>
                  <div className="grid gap-4 grid-cols-1">
                    <div className="flex-col xl:flex-row flex items-center gap-4">
                      <div className="w-full h-12 border-400 bg-white px-4 text-primeColor text-lg">
                        <NavLink to="/alamatisi" activeClassName="active-button">
                          <button className={`rounded-md ${location.pathname === '/alamatisi' ? "bg-black text-white" : "bg-black text-lightText"} w-[20%] h-16 hover-bg-white hover-text-white duration-300 text-base tracking-wide`}>
                            Alamat
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      {/* <FooterBottom /> */}
    </div >
  )
};

export default Alamat;