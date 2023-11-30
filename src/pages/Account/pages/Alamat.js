import React, { useState } from "react";
import { ProfileSideNav } from "../ProfileSideNav";
// import AlamatEmpty from "./AlamatEmpty";
import Breadcrumbs from "../../../components/pageProps/Breadcrumbs";
// import { NavLink, useLocation } from "react-router-dom";
import Footer from "../../../components/home/Footer/Footer"
import FooterBottom from "../../../components/home/Footer/FooterBottom"
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  Option,
  Select,
} from "@material-tailwind/react";
import HeaderProf from "../../../components/home/Header/HeaderProf";

const Alamat = () => {
  // const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  const [username, setUsername] = useState("");
  const [kota, setKota] = useState("");
  const [noHandphone, setNoHandphone] = useState("");
  const [kode, setKode] = useState("");
  const [alamat, setAlamat] = useState("");
  const [negara, setNegara] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleKota = (e) => {
    setKota(e.taget.value);
  }
  const handlenoHandphone = (e) => {
    setNoHandphone(e.target.value);
  }
  const handleKode = (e) => {
    setKode(e.target.value);
  }
  const handleAlamat = (e) => {
    setAlamat(e.target.value);
  }
  const handleSimpan = () => {
    // Simulasi penyimpanan data
    const data = {
      username,
      kota,
      noHandphone,
      kode,
      alamat,
      negara,
    };
    console.log('Data disimpan:', data);
    alert('Data tersimpan!');
  };
  const handleBatal = () => {
    // Simulasi pengambilan data
    const dummyData = {
      username: 'John Doe',
      kota: 'Jakarta',
      noHandphone: '08123456789',
      kode: '12345',
      alamat: 'Jalan Contoh No. 123',
      negara: 'Indonesia',
    };
    // Set nilai ke state dengan data dummy
    setUsername(dummyData.username);
    setKota(dummyData.kota);
    setNoHandphone(dummyData.noHandphone);
    setKode(dummyData.kode);
    setAlamat(dummyData.alamat);
    setNegara(dummyData.negara);
    alert('Data batal diubah!');
  };
  return (
    <div className="flex flex-row h-screen w-screen grid w-full">
      {/* <Header /> */}
      <div>
        {/* <Heading heading="Profile" /> */}
        <div>
          <div className="max-w-container mx-auto px-4">
            
            {/* ================= Products Start here =================== */}
            <div className="w-full h-full flex pb-20 gap-10">
              <div className="lg:w-1/5 md:w-1/4 hidden md:inline-flex h-full">
                <div className="flex flex-col space-y-4">
                <Breadcrumbs title="Profile" />
                  <ProfileSideNav />
                </div>
              </div>
              <div className="w-full lg:w-3/4 md:w-5/6 h-full flex flex-col md:gap-10">
              <HeaderProf />
                  <div className="w-full">
                    <h1 className="text-xl mt-4 font-semibold flex items-center mb-2">Alamat</h1>
                    <p className="my-4 mx-4">untuk memasukan alamat bisa mengklik tombolnya</p>
                    <div className="grid gap-4 grid-cols-1">
                      <div className="flex-col xl:flex-row flex items-center gap-4">
                        <div className="w-full h-12 border-400 bg-white px-4 text-primeColor text-lg">
                          <Button onClick={toggleOpen}>Alamat</Button>
                          <Collapse open={open} className="justify-start items-start"> {/* Tambahkan kelas justify-start dan items-start di sini */}
                            <Card className="my-4 x-auto overflow-y-auto max-h-80">
                              <CardBody>
                                <Typography>
                                  {/* <Card className="w-full">
                                    <CardBody> */}
                                      <div className="w-full flex-col xl:flex-row flex items-center grid grid-cols-2 gap-1">
                                        <div className="flex flex-col w-[70%]">
                                          <p className="text-sm font-bodyFont font-semibold">Nama</p>
                                          <input
                                            onChange={handleUsername}
                                            value={username}
                                            className="w-[100%] h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                                            type="text"
                                            placeholder="Masukan Nama ...*"
                                          />
                                        </div>
                                        <div className="flex flex-col w-[50%]">
                                          <p className="text-sm font-bodyFont font-semibold">No Handphone</p>
                                          <input
                                            onChange={handlenoHandphone}
                                            value={noHandphone}
                                            className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                                            type="text"
                                            placeholder="099872131 ...*"
                                          />
                                        </div>
                                        <div className="flex-col mt-4 w-full pb-4 col-span-2">
                                          <p className="text-sm font-bodyFont font-semibold">Alamat</p>
                                          <label className="block">
                                            <span className="text-gray-700"></span>
                                            <textarea
                                              onChange={handleAlamat}
                                              value={alamat}
                                              className="mt-1 lgl:grid grid-rows-1 grid-cols-1 grid-flow-col gap-2 px-2 block w-[83%] h-24 border-400 bg-white px-4 text-primeColor text-lg placeholder:text-base outline-black"
                                              type="text"
                                              placeholder="Tuliskan Alamat Anda ... " rows="3"></textarea>
                                          </label>
                                        </div>
                                        <div className="flex flex-col w-[50%]">
                                          <p className="text-sm font-bodyFont font-semibold">Kota</p>
                                          <input
                                            onChange={handleKota}
                                            value={kota}
                                            className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                                            type="text"
                                            placeholder="Bantul ...*"
                                          />
                                        </div>
                                        <div className="flex flex-col w-[50%]">
                                          <p className="text-sm font-bodyFont font-semibold">Kode Pos</p>
                                          <input
                                            onChange={handleKode}
                                            value={kode}
                                            className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                                            type="text"
                                            placeholder="kode"
                                          />
                                        </div>
                                        <div className="flex mt-4 flex-col w-full">
                                          <div className="w-72">
                                            <Select
                                              label="Pilih Negara"
                                              animate={{
                                                mount: { y: 0 },
                                                unmount: { y: 25 },
                                              }}
                                            >
                                              <Option>Indonesia</Option>
                                              <Option>Singapura</Option>
                                              <Option>Malaysia</Option>
                                              <Option>Australia</Option>
                                              <Option>Philipines</Option>
                                            </Select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="pt-4 relative flex grid grid-cols-7 gap-1">
                                        {/* <NavLink> */}
                                        <button
                                          onClick={handleSimpan}
                                          className="rounded-md flex-none w- bg-white text-lightText w-[100%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                                        >
                                          Simpan
                                        </button>
                                        <button
                                          onClick={handleBatal}
                                          className="rounded-md bg-white text-lightText w-[100%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                                        >
                                          Batal
                                        </button>
                                      </div>
                                    {/* </CardBody>
                                  </Card> */}
                                </Typography>
                              </CardBody>
                            </Card>
                          </Collapse>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div >
  )
};

export default Alamat;