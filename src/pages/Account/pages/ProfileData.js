import React, { useState } from "react";

const ProfileData = () => {
  const [username, setUsername] = useState("John Doe");
  const [jenisKelamin, setJenisKelamin] = useState("Laki-laki");
  const [noHandphone, setNoHandphone] = useState("08123456789");
  const [email] = useState("john.doe@example.com");

  const handleSimpan = () => {
    alert("Data profil berhasil diperbarui!");
  };

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold font-titleFont text-primeColor mb-6 pb-2 border-b border-gray-100">
        Informasi Profil
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="w-full h-11 border border-gray-300 rounded-lg px-4 text-primeColor text-sm outline-none focus:border-primeColor"
            type="text"
            placeholder="Masukkan Nama Lengkap"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Jenis Kelamin</label>
          <select
            onChange={(e) => setJenisKelamin(e.target.value)}
            value={jenisKelamin}
            className="w-full h-11 border border-gray-300 rounded-lg px-4 text-primeColor text-sm outline-none focus:border-primeColor bg-white"
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">No. Handphone</label>
          <input
            onChange={(e) => setNoHandphone(e.target.value)}
            value={noHandphone}
            className="w-full h-11 border border-gray-300 rounded-lg px-4 text-primeColor text-sm outline-none focus:border-primeColor"
            type="text"
            placeholder="Masukkan No. Handphone"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input
            disabled
            value={email}
            className="w-full h-11 border border-gray-200 bg-gray-100 rounded-lg px-4 text-gray-500 text-sm outline-none cursor-not-allowed"
            type="email"
          />
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
        <button
          onClick={handleSimpan}
          className="px-6 py-2.5 bg-primeColor hover:bg-black text-white text-sm font-semibold rounded-lg transition-colors duration-300 shadow"
        >
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
};

export default ProfileData;
