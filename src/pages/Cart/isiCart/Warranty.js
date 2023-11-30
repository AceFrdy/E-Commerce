import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircleFill } from 'react-icons/bs';
import { logoLight } from '../../../assets/images';
import { GiShieldEchoes } from "react-icons/gi";
const Warranty = () => {
    return (
        <div className="w-1/2 lgl:inline-flex h-full">
            <div className="w-[450px] h-full rounded-lg text-white bg-primeColor px-10 flex flex-col gap-6 justify-center">
                <Link to="/">
                    <img src={logoLight} alt="logoImg" className="w-28 mt-4" />
                </Link>
                <GiShieldEchoes className='w-full custom-shield -mx-4' />
                <h1 className="font-titleFont text-center text-xl font-medium">
                    Protect your product for 4 years
                </h1>
                <p className="text-base mb-8 text-center">
                    Extends your warranty against wear and accidental breakage
                </p>
                {/* <Link to="/cart">
                    <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                        Return to the page
                    </p>
                </Link> */}
                {/* <div className="flex items-center justify-between mt-10">
                    <Link to="/">
                        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                            © OREBI
                        </p>
                    </Link>
                    <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                        Terms
                    </p>
                    <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                        Privacy
                    </p>
                    <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                        Security
                    </p>
                </div> */}
            </div>
            <div className="w-full lgl:inline-flex h-full justify-end">
                <div className="w-[450px] h-full rounded-lg text-black px-10 flex flex-col gap-6 justify-center text-white">
                    <Link to="/">
                        <img src={logoLight} alt="logoImg" className="w-28 mt-4" />
                    </Link>
                    <h2 className="text-2xl font-semibold text-black">Benefit from the advantages of our Orebi Care service:</h2>
                    <div className="w-[300px] flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            <BsCheckCircleFill />
                        </span>
                        
                        <p className="text-base text-black-300">
                            <span className="text-black font-semibold font-titleFont">
                                4 years of protection
                            </span>
                            <br />
                            Additional 3-year warranty against breakdowns and accidents *
                        </p>
                    </div>
                    <div className="w-[300px] flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            <BsCheckCircleFill />
                        </span>
                        <p className="text-base text-black-300">
                            <span className="text-black font-semibold font-titleFont">
                                Accident coverage
                            </span>
                            <br />
                            Benefit from a 50% voucher in the event of accidental damage to the guaranteed product *
                        </p>
                    </div>
                    <div className="w-[300px] flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            <BsCheckCircleFill />
                        </span>
                        <p className="text-base text-black-300">
                            <span className="text-black font-semibold font-titleFont">
                                Orebi Certified Repair
                            </span>
                            <br />
                            We only use original parts to ensure the reliability of our repairs
                        </p>
                    </div>
                    <div className="w-[300px] flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            <BsCheckCircleFill />
                        </span>
                        <p className="text-base text-black-300">
                            <span className="text-black font-semibold font-titleFont">
                                Replacement of your product
                            </span>
                            <br />
                            Return of a new product in the event of irreparability of your device
                        </p>
                    </div>
                    <p className="text-base text-black-300">
                        You can subscribe to our warranty extension, Orebi Care, once your product has been added to the basket.
                        <br />
                        * See the warranty extension conditions for more details
                    </p>
                    {/* <Link to="/return">
                        <p className="text-sm font-titleFont font-semibold text-black-300 hover:text-white cursor-pointer duration-300">
                            Return to the page
                        </p>
                    </Link> */}
                    <div className="flex items-center justify-between mt-10">
                        <Link to="/">
                            <p className="text-sm font-titleFont font-semibold text-black-300 hover:text-green-500 cursor-pointer duration-300">
                                © OREBI
                            </p>
                        </Link>
                        <p className="text-sm font-titleFont font-semibold text-black-300 hover:text-green-500 cursor-pointer duration-300">
                            Terms
                        </p>
                        <p className="text-sm font-titleFont font-semibold text-black-300 hover:text-green-500 cursor-pointer duration-300">
                            Privacy
                        </p>
                        <p className="text-sm font-titleFont font-semibold text-black-300 hover:text-green-500 cursor-pointer duration-300">
                            Security
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Warranty;
