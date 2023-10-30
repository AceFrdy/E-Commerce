import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
import ProfileSideNav from "../ProfileSideNav";
import Breadcrumbs from "../../../components/pageProps/Breadcrumbs";
// import { GoTriangleDown } from "react-icons/go";
const AlamatEmpty = () => {
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
    const handleNegara = (e) => {
        setNegara(e.target.value);
    }
    // const location = useLocation();
    return (
        <div>
            <div>
                <div className="max-w-container mx-auto px-4">
                    <Breadcrumbs title="Profile" />
                    {/* ================= Products Start here =================== */}
                </div>
                <div className="w-full h-full flex pb-20 gap-10">
                    <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
                        <div className="flex flex-col space-y-4">
                            <ProfileSideNav />
                        </div>
                    </div>
                    <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
                        <h1 className="text-xl font-semibold flex">Alamat</h1>
                        {/* <div className="grid gap-2 grid-cols-2"> */}
                        <div className="w-full flex-col xl:flex-row flex items-center grid grid-cols-2 gap-4">
                            <div className="flex flex-col w-[65%]">
                                <p className="text-lg font-bodyFont font-semibold">Nama</p>
                                <input
                                    onChange={handleUsername}
                                    value={username}
                                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                                    type="text"
                                    placeholder="Masukan Nama ...*"
                                />
                            </div>
                            <div className="flex flex-col w-[65%]">
                                <p className="text-lg font-bodyFont font-semibold">No Handphone</p>
                                <input
                                    onChange={handlenoHandphone}
                                    value={noHandphone}
                                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                                    type="text"
                                    placeholder="099872131 ...*"
                                />
                            </div>
                            <div className="flex-col w-full pb-4 col-span-2">
                                <p className="text-lg font-bodyFont font-semibold">Alamat</p>
                                <label className="block">
                                    <span className="text-gray-700"></span>
                                    <textarea
                                        onChange={handleAlamat}
                                        value={alamat}
                                        className="mt-1 lgl:grid grid-rows-2 grid-cols-2 grid-flow-col gap-2 px-2 block w-[83%] h-24 border-400 bg-white px-4 text-primeColor text-lg placeholder:text-base outline-black"
                                        type="text"
                                        placeholder="Tuliskan Alamat Anda ... " rows="3"></textarea>
                                </label>
                            </div>
                            <div className="flex flex-col w-[65%]">
                                <p className="text-lg font-bodyFont font-semibold">Kota</p>
                                <input
                                    onChange={handleKota}
                                    value={kota}
                                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                                    type="text"
                                    placeholder="Bantul ...*"
                                />
                            </div>
                            <div className="flex flex-col w-[65%]">
                                <p className="text-lg font-bodyFont font-semibold">Kode Pos</p>
                                <input
                                    onChange={handleKode}
                                    value={kode}
                                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                                    type="text"
                                    placeholder="44634"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <div className=" gap-2 text-base relative">
                                    <p className="text-lg font-bodyFont font-semibold">Negara</p>
                                    <select
                                        onChange={handleNegara}
                                        value={negara}
                                        className="mt-2 w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
                                    >
                                        <option >Pilih Negara</option>
                                        <option >Indonesia</option>
                                        <option >Malaysia</option>
                                        <option >Singapura</option>
                                        <option >Australia</option>
                                    </select>
                                    {/* <span className="text-sm right-2 md:right-4 top-2.5"> */}
                                        {/* <GoTriangleDown /> */}
                                    {/* </span> */}
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 relative flex grid grid-cols-7 gap-1">
                            {/* <NavLink> */}
                            
                                <button
                                    onClick={() => alert('Terhapus')}
                                    className="rounded-md flex-none w- bg-white text-lightText w-[100%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                                >
                                    Simpan
                                </button>
                            {/* </NavLink> */}
                            
                                <button
                                    onClick={() => alert('Terhapus')}
                                    className="rounded-md bg-white text-lightText w-[100%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                                >
                                    Batal
                                </button>
                            
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AlamatEmpty;