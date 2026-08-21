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
      <Card className="w-full p-4 shadow-md border border-gray-100 rounded-xl">
        <div className="mb-2 px-3 py-2 border-b border-gray-100">
          <Typography variant="h6" className="font-titleFont text-primeColor font-bold">
            Akun Saya
          </Typography>
        </div>
        <List className="p-0">
          {navItems.map((item) => {
            const isActive = currentPath === item.link;
            return (
              <Link key={item.link} to={item.link}>
                <ListItem
                  className={`flex items-center justify-between my-1 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primeColor text-white font-semibold hover:bg-black hover:text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ListItemPrefix className="m-0">
                      {item.icon}
                    </ListItemPrefix>
                    <span>{item.title}</span>
                  </div>
                  {item.badge && (
                    <ListItemSuffix>
                      <Chip
                        value={item.badge}
                        size="sm"
                        variant="ghost"
                        color={isActive ? "white" : "blue-gray"}
                        className="rounded-full px-2"
                      />
                    </ListItemSuffix>
                  )}
                </ListItem>
              </Link>
            );
          })}
          <ListItem
            onClick={handleOpen}
            className="flex items-center gap-3 text-red-600 hover:bg-red-50 hover:text-red-700 mt-2 rounded-lg"
          >
            <ListItemPrefix className="m-0">
              <PowerIcon className="h-5 w-5 text-red-600" />
            </ListItemPrefix>
            <span>Log Out</span>
          </ListItem>
        </List>
      </Card>

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