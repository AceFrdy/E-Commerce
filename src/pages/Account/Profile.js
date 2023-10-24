import React from "react";
import Header from "../../components/home/Header/Header";
import Footer from "../../components/home/Footer/Footer";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
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
              <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
                <div className="grid gap-4 grid-cols-2">
                  <div className="w-full flex-col xl:flex-row flex items-center gap-4">
                    <div className="flex flex-col w-full">
                      <p className="text-lg font-bodyFont font-semibold mb-6">Nama</p>
                      <input
                        className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                        type="text"
                        placeholder="Masukan Nama ...*"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col w-full">
                      <p className="text-lg font-bodyFont font-semibold mb-6">Jenis Kelamin</p>
                      <input
                        className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                        type="text"
                        placeholder="Jenis Kelamin ...*"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col w-full">
                      <p className="text-lg font-bodyFont font-semibold mb-6">No.Handphone</p>
                      <input
                        className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                        type="text"
                        placeholder="087654321*"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col w-full">
                      <p className="text-lg font-bodyFont font-semibold mb-6">Email</p>
                      <text
                        className="w-full h-12 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                        type="text"
                      >
                        user123@gmail.com
                      </text >
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => alert('Tersimpan')}
                      className="bg-white text-lightText w-[20%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
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
