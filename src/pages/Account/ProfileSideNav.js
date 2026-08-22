import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Button,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { BsBookmarkHeart } from "react-icons/bs";

export function ProfileSideNav() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleOpen = () => setOpen(!open);

  const navItems = [
    {
      title: "Profile",
      link: "/profile",
      icon: <UserCircleIcon className="h-5 w-5" />,
    },
    {
      title: "Alamat",
      link: "/alamat",
      icon: <ShoppingBagIcon className="h-5 w-5" />,
    },
    {
      title: "Wishlist",
      link: "/wishlistitem",
      icon: <BsBookmarkHeart className="h-5 w-5" />,
    },
    {
      title: "Pesanan Saya",
      link: "/pesanan",
      icon: <InboxIcon className="h-5 w-5" />,
      badge: "3",
    },
  ];

  return (
    <>
      <div className="w-full bg-white border border-gray-200/80 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300">
        {/* User Profile Info Header */}
        <div className="flex items-center gap-3.5 pb-4 mb-4 border-b border-gray-100">
          <div className="w-12 h-12 rounded-full bg-primeColor text-white flex items-center justify-center text-base font-extrabold font-titleFont shadow-sm shrink-0">
            JD
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h3 className="font-titleFont font-bold text-sm text-primeColor truncate">
                John Doe
              </h3>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded-full shrink-0">
                Verified
              </span>
            </div>
            <p className="text-xs text-gray-500 truncate mt-0.5">john.doe@example.com</p>
          </div>
        </div>

        {/* Menu Section Label */}
        <p className="hidden md:block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">
          Navigasi Akun
        </p>

        {/* Navigation Items */}
        <div className="flex flex-row md:flex-col overflow-x-auto gap-1.5 scrollbar-hide">
          {navItems.map((item) => {
            const isActive = currentPath === item.link;
            return (
              <Link key={item.link} to={item.link} className="shrink-0 md:shrink">
                <div
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 text-xs sm:text-sm whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-primeColor text-white font-bold shadow-sm"
                      : "text-gray-700 bg-gray-50 md:bg-transparent hover:bg-gray-100 hover:text-primeColor"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0">{item.icon}</span>
                    <span className="font-titleFont">{item.title}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isActive
                          ? "bg-white text-primeColor"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}

          <div className="hidden md:block my-2 border-t border-gray-100" />

          <button
            onClick={handleOpen}
            className="flex items-center gap-3 text-red-600 hover:bg-red-50 hover:text-red-700 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm shrink-0 whitespace-nowrap transition-colors font-medium cursor-pointer"
          >
            <PowerIcon className="h-4 w-4 text-red-600 shrink-0" />
            <span>Keluar dari Akun</span>
          </button>
        </div>
      </div>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="font-titleFont text-lg">Konfirmasi Log Out</DialogHeader>
        <DialogBody className="text-sm text-gray-600">
          Apakah Anda yakin ingin keluar dari akun Anda?
        </DialogBody>
        <DialogFooter className="gap-2">
          <Button variant="outlined" color="gray" onClick={handleOpen}>
            Batal
          </Button>
          <Link to="/">
            <Button variant="filled" className="bg-red-600 text-white hover:bg-red-700" onClick={handleOpen}>
              Ya, Log Out
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>
    </>
  );
}