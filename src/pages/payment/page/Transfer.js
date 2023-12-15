import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Konfirm } from "./Konfirm";
import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
    Dialog, 
    DialogBody,
} from "@material-tailwind/react";

export function Transfer() {
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
        <div className="flex flex-col space-y-4">
            <Dialog
                className="w-full h-[90%] rounded-lg overflow-auto touch-auto"
                open={open}
                size="xl"
                handler={handleOpen}>
                <DialogBody>
                    <Konfirm />
                </DialogBody>
            </Dialog>
            <div className="flex flex-col gap-4" >
                <div className="mdl:inline-flex h-full">
                    <div className="flex flex-col ml-20 ">
                        <Card className="w-full"
                        shadow={false}>
                            <List>
                                <ListItem className="p-0">
                                    <label
                                        htmlFor="vertical-list-bri"
                                        className="flex w-full cursor-pointer items-center px-3 py-2"
                                    >
                                        <ListItemPrefix className="mr-3">
                                            <Radio
                                                name="vertical-list"
                                                id="vertical-list-bri"
                                                ripple={false}
                                                className="hover:before:opacity-0"
                                                containerProps={{
                                                    className: "p-0",
                                                }}
                                            />
                                        </ListItemPrefix>
                                        <img
                                            src="https://i0.wp.com/febi.uinsaid.ac.id/wp-content/uploads/2020/11/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png?ssl=1"
                                            alt="BRI Bank Logo"
                                            className=" w-16"
                                        />
                                        <Typography
                                            color="blue-gray"
                                            className="font-medium text-blue-gray-400 ml-2"
                                        >
                                            BRI Bank
                                        </Typography>
                                    </label>
                                </ListItem>
                                <ListItem className="p-0">
                                    <label
                                        htmlFor="vertical-list-bri"
                                        className="flex w-full cursor-pointer items-center px-3 py-2"
                                    >
                                        <ListItemPrefix className="mr-3">
                                            <Radio
                                                name="vertical-list"
                                                id="vertical-list-bri"
                                                ripple={false}
                                                className="hover:before:opacity-0"
                                                containerProps={{
                                                    className: "p-0",
                                                }}
                                            />
                                        </ListItemPrefix>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/id/5/55/BNI_logo.svg"
                                            alt="BRI Bank Logo"
                                            className="w-20"
                                        />
                                        <Typography
                                            color="blue-gray"
                                            className="font-medium text-blue-gray-400 ml-2"
                                        >
                                            BNI Bank
                                        </Typography>
                                    </label>
                                </ListItem>
                                <ListItem className="p-0">
                                    <label
                                        htmlFor="vertical-list-bri"
                                        className="flex w-full cursor-pointer items-center px-3 py-2"
                                    >
                                        <ListItemPrefix className="mr-3">
                                            <Radio
                                                name="vertical-list"
                                                id="vertical-list-bri"
                                                ripple={false}
                                                className="hover:before:opacity-0"
                                                containerProps={{
                                                    className: "p-0",
                                                }}
                                            />
                                        </ListItemPrefix>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg"
                                            alt="BRI Bank Logo"
                                            className="w-20"
                                        />
                                        <Typography
                                            color="blue-gray"
                                            className="font-medium text-blue-gray-400 ml-2"
                                        >
                                            BCA Bank
                                        </Typography>
                                    </label>
                                </ListItem>
                            </List>
                        </Card>
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
                                ${totalAmt + Pajak - (totalAmt * 20) / 100}
                            </span>
                        </p>
                    </div>
                            <div className="flex justify-center">
                                <Link to="/konfirmasitransfer">
                                    <button
                                        onClick={handleOpen}
                                        className="w-52 h-10 bg-primeColor rounded-lg text-white hover:bg-black duration-300">
                                        Proceed to Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transfer;
