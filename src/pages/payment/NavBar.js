import React from "react";
import { NavLink } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

function NavBar() {
  // const location = useLocation();

  return (
    <div className="grid grid-cols-3 w-max gap-4 ">
      <div className="flex flex-col grid justify-items-center">
        <NavLink to="/transfer" activeClassName="active-button">
          <Button className="rounded-md w-30 mb-7 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Transfer
          </Button>
        </NavLink>
      </div>
      <div className="flex flex-col grid justify-items-center">
        <NavLink to="/cod" activeClassName="active-button">
          <Button className="rounded-md w-36 mb-7 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            COD
          </Button>
        </NavLink>
      </div>
      <div className="flex flex-col grid justify-items-center">
        <NavLink to="/qris" activeClassName="active-button">
          <Button className="rounded-md w-36 mb-7  h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            QRIS
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
