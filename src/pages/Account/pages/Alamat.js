import React from "react";

const Alamat = () => {
  return (
    <div>
      <div><h1 className="font-bold flex pb-4">Alamat</h1>
            <div className="w-full h-12 border-b border-400 bg-white px-4 text-primeColor text-lg">
                {/* <NavLink to="/Alamat" activeClassName="active-button"> */}
                    <button className="rounded-md w-[20%] h-16 bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium duration-300">
                        Alamat
                    </button>
                {/* </NavLink> */}
            </div>
        </div>
    </div>
  )
};

export default Alamat;