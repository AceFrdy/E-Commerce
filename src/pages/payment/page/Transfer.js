import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Konfirm } from "./Konfirm";
import { Radio, Card, List, ListItem, ListItemPrefix, Typography, Dialog, DialogBody } from "@material-tailwind/react";
import { spfOne, spfTwo, bestSellerOne } from "../../../assets/images/index";

export function Transfer() {
  const reduxProducts = useSelector((state) => state.orebiReducer.products);
  const defaultItems = [
    { price: 300, quantity: 1 },
    { price: 150, quantity: 2 },
    { price: 320, quantity: 1 },
  ];
  const items = reduxProducts && reduxProducts.length > 0 ? reduxProducts : defaultItems;

  const [totalAmt, setTotalAmt] = useState(0);
  const [selectedBank, setSelectedBank] = useState("BRI");
  const [open, setOpen] = React.useState(false);
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
        className="w-full max-h-[90vh] rounded-lg overflow-auto touch-auto"
        open={open}
        size="xl"
        handler={handleOpen}
      >
        <DialogBody>
          <Konfirm />
        </DialogBody>
      </Dialog>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Bank Selection */}
        <div>
          <h4 className="text-xs font-bold text-primeColor uppercase tracking-wider mb-3">
            Pilih Bank Transfer
          </h4>
          <Card shadow={false} className="border border-gray-200">
            <List className="p-1.5 space-y-1">
              {[
                {
                  id: "BRI",
                  name: "Bank BRI",
                  logo: "https://i0.wp.com/febi.uinsaid.ac.id/wp-content/uploads/2020/11/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png?ssl=1",
                  account: "0981-7861-6578",
                },
                {
                  id: "BNI",
                  name: "Bank BNI",
                  logo: "https://upload.wikimedia.org/wikipedia/id/5/55/BNI_logo.svg",
                  account: "0234-8891-1200",
                },
                {
                  id: "BCA",
                  name: "Bank BCA",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg",
                  account: "8830-1928-3410",
                },
              ].map((bank) => {
                const isSelected = selectedBank === bank.id;
                return (
                  <div
                    key={bank.id}
                    onClick={() => setSelectedBank(bank.id)}
                    className={`p-3 rounded-lg flex items-center justify-between cursor-pointer border transition-all ${
                      isSelected
                        ? "border-primeColor bg-gray-50 shadow-sm"
                        : "border-gray-100 hover:bg-gray-50/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="bank"
                        checked={isSelected}
                        onChange={() => setSelectedBank(bank.id)}
                        className="accent-primeColor w-4 h-4 cursor-pointer"
                      />
                      <img
                        src={bank.logo}
                        alt={bank.name}
                        className="w-14 h-8 object-contain"
                      />
                      <span className="text-xs font-bold text-gray-800">
                        {bank.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-gray-500 font-semibold">
                      {bank.account}
                    </span>
                  </div>
                );
              })}
            </List>
          </Card>
        </div>

        {/* Totals Summary & Confirm */}
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <h4 className="text-xs font-bold text-primeColor uppercase tracking-wider mb-3">
            Rincian Pembayaran
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
              <span>Total Akhir</span>
              <span className="text-base font-extrabold">${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-5">
            <Link to="/konfirmasitransfer">
              <button className="w-full py-2.5 bg-primeColor hover:bg-black text-white text-xs font-bold rounded-lg transition-colors shadow">
                Konfirmasi & Petunjuk Transfer ({selectedBank})
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
