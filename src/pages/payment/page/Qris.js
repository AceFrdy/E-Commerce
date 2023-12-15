import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { QRCodeCanvas } from 'qrcode.react';
import { Dialog, DialogBody, Button, Typography } from '@material-tailwind/react';
import { BsCheckCircleFill } from "react-icons/bs";

const Qris = () => {
    // const dispatch = useDispatch();
    const products = useSelector((state) => state.orebiReducer.products);
    const [totalAmt, setTotalAmt] = useState("");
    const [Pajak, setPajak] = useState("");
    const [pilihKurir] = useState(10);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);


    useEffect(() => {
        let price = 0;
        products.map((item) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmt(price);
    }, [products]);
    useEffect(() => {
        if (totalAmt <= 200) {
            setPajak(30);
        } else if (totalAmt <= 400) {
            setPajak(25);
        } else if (totalAmt > 401) {
            setPajak(20);
        }
    }, [totalAmt]);
    return (
        <div>
            <Dialog className="w-full h-[60%] rounded-lg overflow-auto touch-auto" open={open} size="xl" handler={handleOpen}>
                <DialogBody className="grid place-items-center gap-4">
                    <BsCheckCircleFill className='h-60 w-60' />
                    <Typography variant="h3">
                        Pesanan Sedang Di Proses!
                    </Typography>
                    <Button variant="gradient" onClick={handleOpen}>
                        Keluar
                    </Button>
                </DialogBody>
            </Dialog>
            <div className="flex flex-col gap-4" >
                <div className="flex flex-col ml-20 mt-5 space-y-4">
                    <div className="App">
                        <header onChange={handleOpen} className="App-header">
                            <p>Scan My QR Code</p>
                            <QRCodeCanvas value="https://youtu.be/dQw4w9WgXcQ?si=OY7jWbsQxrsCYWEN" />
                        </header>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col gap-10">
                    <div className="w-full gap-4 flex justify-end mt-4">
                        <div className="w-full flex flex-col gap-4">
                            <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
                            <div>
                                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                                    Harga Barang
                                    <span className="font-semibold tracking-wide font-titleFont">
                                        ${totalAmt}
                                    </span>
                                </p>
                                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                                    Pajak
                                    <span className="font-semibold tracking-wide font-titleFont">
                                        ${Pajak}
                                    </span>
                                </p>
                                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                                    Biaya Pengiriman
                                    <span className="font-semibold tracking-wide font-titleFont">
                                        ${pilihKurir}
                                    </span>
                                </p>
                                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                                    Coupon
                                    <span className="font-semibold tracking-wide font-titleFont">
                                        {20}%
                                    </span>
                                </p>
                                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                                    Total
                                    <span className="font-bold tracking-wide text-lg font-titleFont">
                                        ${totalAmt + pilihKurir + Pajak - (totalAmt * 20) / 100}
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-end">
                                {/* <Link to="/paymentgateway"> */}
                                {/* <button onClick={handleOpen} className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                                        Proceed to Checkout
                                    </button> */}
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qris;
