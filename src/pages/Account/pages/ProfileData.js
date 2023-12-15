import React, { useState } from "react";

const ProfileData = () => {
  const [username, setUsername] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [noHandphone, setNoHandphone] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleJenisKelamin = (e) => {
    setJenisKelamin(e.taget.value);
  }
  const handlenoHandphone = (e) => {
    setNoHandphone(e.target.value);
  }
  return (
    <div className="w-full lg:w-3/4 md:w-5/6 h-full flex flex-col md:gap-10">
      <h1 className="text-xl font-semibold flex">Profile</h1>
      <div className="grid gap-4 grid-cols-2">
        <div className="w-full flex-col xl:flex-row flex items-center gap-4">
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
        </div>
        <div>
          <div className="flex flex-col w-full">
            <p className="text-lg font-bodyFont font-semibold mb-6">Jenis Kelamin</p>
            <input
              onChange={handleJenisKelamin}
              value={jenisKelamin}
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
              onChange={handlenoHandphone}
              value={noHandphone}
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
            className="rounded-md bg-primeColor cursor-pointer hover:bg-black active:bg-gray-900 px-2.5 py-2.5 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>

  );
};

export default ProfileData;
