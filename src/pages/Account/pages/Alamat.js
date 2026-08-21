import React, { useState } from "react";
import { ProfileSideNav } from "../ProfileSideNav";
import Breadcrumbs from "../../../components/pageProps/Breadcrumbs";
import { Collapse, Button } from "@material-tailwind/react";
import { FaMapMarkerAlt, FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";

const Alamat = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      nama: "John Doe",
      noHandphone: "08123456789",
      alamat: "Jalan Malioboro No. 123, Kel. Sosromenduran, Kec. Gedongtengen",
      kota: "Yogyakarta",
      kodePos: "55271",
      negara: "Indonesia",
      isPrimary: true,
    },
  ]);

  const [form, setForm] = useState({
    nama: "",
    noHandphone: "",
    alamat: "",
    kota: "",
    kodePos: "",
    negara: "Indonesia",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSimpan = () => {
    if (!form.nama || !form.alamat || !form.kota) {
      alert("Harap lengkapi informasi alamat.");
      return;
    }
    const newAddress = {
      id: Date.now(),
      ...form,
      isPrimary: addresses.length === 0,
    };
    setAddresses([...addresses, newAddress]);
    setForm({
      nama: "",
      noHandphone: "",
      alamat: "",
      kota: "",
      kodePos: "",
      negara: "Indonesia",
    });
    setOpen(false);
    alert("Alamat berhasil ditambahkan!");
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-container mx-auto px-4 py-6">
      <Breadcrumbs title="Alamat" />
      <div className="w-full flex flex-col md:flex-row pb-20 gap-8">
        <div className="w-full md:w-1/4">
          <ProfileSideNav />
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white border border-gray-100 shadow-md rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
              <div>
                <h1 className="text-xl font-bold font-titleFont text-primeColor">
                  Daftar Alamat Saya
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  Kelola alamat pengiriman untuk kemudahan checkout
                </p>
              </div>
              <Button
                onClick={toggleOpen}
                className="bg-primeColor hover:bg-black text-white text-xs font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow"
              >
                <FaPlus className="text-xs" />
                Tambah Alamat Baru
              </Button>
            </div>

            {/* Collapsible Form */}
            <Collapse open={open}>
              <div className="bg-[#F5F5F3] p-5 rounded-xl border border-gray-200 mb-6">
                <h2 className="text-sm font-bold text-primeColor mb-4">
                  Formulir Alamat Baru
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      Nama Penerima
                    </label>
                    <input
                      name="nama"
                      value={form.nama}
                      onChange={handleInputChange}
                      className="w-full h-10 border border-gray-300 rounded-lg px-3 text-xs outline-none bg-white focus:border-primeColor"
                      placeholder="Nama Penerima"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      No. Handphone
                    </label>
                    <input
                      name="noHandphone"
                      value={form.noHandphone}
                      onChange={handleInputChange}
                      className="w-full h-10 border border-gray-300 rounded-lg px-3 text-xs outline-none bg-white focus:border-primeColor"
                      placeholder="08123456789"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      Alamat Lengkap
                    </label>
                    <textarea
                      name="alamat"
                      rows="3"
                      value={form.alamat}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-3 text-xs outline-none bg-white focus:border-primeColor"
                      placeholder="Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan"
                    ></textarea>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      Kota / Kabupaten
                    </label>
                    <input
                      name="kota"
                      value={form.kota}
                      onChange={handleInputChange}
                      className="w-full h-10 border border-gray-300 rounded-lg px-3 text-xs outline-none bg-white focus:border-primeColor"
                      placeholder="Kota"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      Kode Pos
                    </label>
                    <input
                      name="kodePos"
                      value={form.kodePos}
                      onChange={handleInputChange}
                      className="w-full h-10 border border-gray-300 rounded-lg px-3 text-xs outline-none bg-white focus:border-primeColor"
                      placeholder="55123"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-200">
                  <button
                    onClick={toggleOpen}
                    className="px-4 py-2 bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-300"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSimpan}
                    className="px-4 py-2 bg-primeColor text-white text-xs font-semibold rounded-lg hover:bg-black"
                  >
                    Simpan Alamat
                  </button>
                </div>
              </div>
            </Collapse>

            {/* Saved Address List */}
            <div className="space-y-4">
              {addresses.map((item) => (
                <div
                  key={item.id}
                  className="p-5 border border-gray-200 rounded-xl relative hover:border-gray-400 transition-colors bg-white shadow-sm flex flex-col sm:flex-row justify-between gap-4"
                >
                  <div className="flex gap-3 items-start">
                    <FaMapMarkerAlt className="text-primeColor text-lg mt-1 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm text-primeColor font-titleFont">
                          {item.nama}
                        </span>
                        <span className="text-xs text-gray-500 font-medium">
                          ({item.noHandphone})
                        </span>
                        {item.isPrimary && (
                          <span className="bg-black text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                            Utama
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed max-w-xl">
                        {item.alamat}, {item.kota}, {item.kodePos},{" "}
                        {item.negara}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Hapus Alamat"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                </div>
              ))}

              {addresses.length === 0 && (
                <div className="py-12 text-center text-gray-400">
                  <FaMapMarkerAlt className="text-4xl mx-auto mb-2 opacity-30" />
                  <p className="text-sm">Belum ada alamat tersimpan.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alamat;