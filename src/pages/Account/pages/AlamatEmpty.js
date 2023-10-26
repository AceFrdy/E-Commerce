import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
    return (
        <div><h1 className="font-bold flex pb-4">Alamat</h1>
            {/* <div className="grid gap-2 grid-cols-2"> */}
            <div className="w-full flex-col xl:flex-row flex items-center grid grid-cols-2 gap-4">
                <div className="flex flex-col w-full">
                    <p className="text-lg font-bodyFont font-semibold mb-6">Nama</p>
                    <input
                        onChange={handleUsername}
                        value={username}
                        className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                        type="text"
                        placeholder="Masukan Nama ...*"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <p className="text-lg font-bodyFont font-semibold mb-6">No Handphone</p>
                    <input
                        onChange={handlenoHandphone}
                        value={noHandphone}
                        className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                        type="text"
                        placeholder="099872131 ...*"
                    />
                </div>
                <div className="flex-col w-full pb-4 col-span-2">
                    <p className="text-lg font-bodyFont font-semibold mb-6">Alamat</p>
                    <label className="block">
                        <span className="text-gray-700"></span>
                        <textarea
                            onChange={handleAlamat}
                            value={alamat}
                            className="mt-1 block w-full w-full h-36 border-400 bg-white px-4 text-primeColor text-lg placeholder:text-base outline-black"
                            type="text"
                            placeholder="Tuliskan Alamat Anda ... " rows="3"></textarea>
                    </label>
                </div>
                <div className="flex flex-col w-full">
                    <p className="text-lg font-bodyFont font-semibold mb-6">kota</p>
                    <input
                        onChange={handleKota}
                        value={kota}
                        className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                        type="text"
                        placeholder="Bantul ...*"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <p className="text-lg font-bodyFont font-semibold mb-6">Kode Pos</p>
                    <input
                        onChange={handleKode}
                        value={kode}
                        className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                        type="text"
                        placeholder="44634"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <p className="text-lg font-bodyFont font-semibold mb-6">Negara</p>
                    <select
                        onChange={handleNegara}
                        value={negara}
                        className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
                    >
                        <option >Indonesia</option>
                        <option >Malaysia</option>
                        <option >Singapura</option>
                        <option >Australia</option>
                    </select>
                </div>
            </div>
            <div className="pt-4 grid grid-cols-4 gap-4">
                <button
                    onClick={() => alert('Tersimpan')}
                    className="rounded-md bg-white text-lightText w-[50%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                >
                    Simpan
                </button>
                <div>
                <button
                    onClick={() => alert('Tersimpan')}
                    className="rounded-md bg-white text-lightText w-[50%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                >
                    Batal
                </button>
                </div>
            </div> 
            {/* </div> */}
        </div>
    )
};

export default AlamatEmpty;