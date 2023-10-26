import React, { useState } from "react";


const ProfileData = () => {
  // const userData = JSON.parse(localStorage.getItem('userData'));
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
    <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
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
            className="bg-white text-lightText w-[20%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>

  );
};

export default ProfileData;
