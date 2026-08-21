import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaTruck, FaWallet, FaHandHoldingUsd } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { LuPackageOpen } from 'react-icons/lu';

export const NavPes = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const navList = (
    <ul className="mt-2 mx-2 justify-between mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center hover:text-blue-500 transition-colors flex flex-col items-center gap-x-2 p-1 font-medium"
      >
        <FaWallet className="w-5 h-5" />
        <a href="/belumBa" className="flex items-center">
          Belum Bayar
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center hover:text-blue-500 transition-colors flex flex-col items-center gap-x-2 p-1 font-medium"
      >
        <FaHandHoldingUsd className="w-5 h-5" />
        <a href="/ambil" className="flex items-center">
          Diambil Di Toko
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center hover:text-blue-500 transition-colors flex flex-col items-center gap-x-2 p-1 font-medium"
      >
        <LuPackageOpen className="w-5 h-5"/>
        <a href="/dikemas" className="flex items-center">
          Dikemas
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center hover:text-blue-500 transition-colors flex flex-col items-center gap-x-2 p-6 font-medium"
      >
        <FaTruck className='w-6 h-5' />
        <a href="/dikirim" className="flex items-center">
          Dikirim
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center hover:text-blue-500 transition-colors flex flex-col items-center gap-x-2 p-1 font-medium"
      >
        <BsCheckCircleFill className='w-5 h-5' />
        <a href="/pesananselesai" className="flex items-center">
          Pesanan Selesai
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 h-20 lg:px-8 lg:py-2">
      <div className="container mx-auto items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavPes;