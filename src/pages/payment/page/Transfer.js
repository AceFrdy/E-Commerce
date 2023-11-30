import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { Navbar } from "@material-tailwind/react";
// import Payment from '../Payment';
import BRI from "../../../assets/images/BRI.png"
import BCA from "../../../assets/images/BCA.png"
import BNI from "../../../assets/images/BNI.png"

export function Transfer() {
    // const dispatch = useDispatch();
    const products = useSelector((state) => state.orebiReducer.products);
    const [totalAmt, setTotalAmt] = useState("");
    const [Pajak, setPajak] = useState("");
    const [pilihKurir] = useState(10);

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
console.log(BCA,BRI,BNI);


    return (

        <div className="flex" >
            {/* <Payment /> */}
            {/* <Navbar /> */}
            <div className="w-[30%] lgl:w-[70%] hidden mdl:inline-flex h-full">
                <div className="flex flex-col ml-20 space-y-4">
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Pilih Bank :</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="BRI"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="BRI" control={<Radio />} label="BRI" />
                            <img className="w-24" src={BRI} alt="BRI"/>
                            <FormControlLabel value="BNI" control={<Radio />} label="BNI" />
                            <img className="w-24" src={BNI}alt="BNI"/>
                            <FormControlLabel value="BCA" control={<Radio />} label="BCA" />
                            <img className="w-24" src={BCA}alt="BCA"/>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <div className="w-full mdl:w-[70%] lgl:w-[30%] h-full flex flex-col gap-10">
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
                            <Link to="/paymentgateway">
                                <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Transfer;
