import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import { Dialog, DialogBody, Typography, Button } from "@material-tailwind/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaQrcode, FaMobileAlt } from "react-icons/fa";

const Qris = () => {
  const reduxProducts = useSelector((state) => state.diamoReducer.products);
  const defaultItems = [
    { price: 300, quantity: 1 },
    { price: 150, quantity: 2 },
    { price: 320, quantity: 1 },
  ];
  const items = reduxProducts && reduxProducts.length > 0 ? reduxProducts : defaultItems;

  const [totalAmt, setTotalAmt] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    let price = 0;
    items.forEach((item) => {
      price += Number(item.price) * Number(item.quantity);
    });
    setTotalAmt(price);
  }, [items]);

  const pajak = totalAmt > 400 ? 20 : totalAmt > 200 ? 25 : 30;
  const pilihKurir = 10;
  const discountAmount = (totalAmt * 20) / 100;
  const finalTotal = totalAmt + pajak + pilihKurir - discountAmount;

  return (
    <div className="flex flex-col gap-6">
      <Dialog
        className="w-full max-w-md rounded-xl p-4"
        open={open}
        handler={handleOpen}
      >
        <DialogBody className="flex flex-col items-center text-center gap-4 py-8">
          <BsCheckCircleFill className="text-6xl text-green-500" />
          <Typography variant="h4" className="font-bold text-primeColor font-titleFont">
            Pembayaran QRIS Berhasil!
          </Typography>
          <p className="text-xs text-gray-500 max-w-xs">
            Pembayaran sebesar <span className="font-bold text-primeColor">${finalTotal.toFixed(2)}</span> telah terverifikasi secara otomatis.
          </p>
          <Button
            className="bg-primeColor hover:bg-black text-white text-xs px-6 py-2.5 rounded-lg mt-2"
            onClick={handleOpen}
          >
            Selesai
          </Button>
        </DialogBody>
      </Dialog>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* QR Code Container */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center text-center shadow-sm">
          <div className="flex items-center gap-2 text-primeColor font-bold text-xs uppercase tracking-wider mb-4">
            <FaQrcode className="text-lg text-primeColor" />
            <span>Pindai Kode QRIS</span>
          </div>
          <div className="p-3 bg-white border-2 border-dashed border-gray-300 rounded-xl mb-3 shadow-inner">
            <QRCodeCanvas
              value={`https://diamo.store/pay?amount=${finalTotal}`}
              size={180}
            />
          </div>
          <p className="text-[11px] text-gray-500 flex items-center gap-1">
            <FaMobileAlt />
            Dapat dipindai dengan GoPay, OVO, Dana, ShopeePay, & Mobile Banking.
          </p>
        </div>

        {/* Totals & Confirm Button */}
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <h4 className="text-xs font-bold text-primeColor uppercase tracking-wider mb-3">
            Rincian Pembayaran QRIS
          </h4>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal Produk</span>
              <span className="font-semibold text-gray-800">${totalAmt.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Penanganan / Pajak</span>
              <span className="font-semibold text-gray-800">${pajak.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Pengiriman</span>
              <span className="font-semibold text-gray-800">${pilihKurir.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600 font-semibold">
              <span>Diskon Kupon (20%)</span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>
            <div className="pt-2 border-t border-gray-200 flex justify-between font-bold text-sm text-primeColor">
              <span>Total Bayar QRIS</span>
              <span className="text-base font-extrabold">${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={handleOpen}
              className="w-full py-2.5 bg-primeColor hover:bg-black text-white text-xs font-bold rounded-lg transition-colors shadow"
            >
              Konfirmasi Pembayaran QRIS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qris;
