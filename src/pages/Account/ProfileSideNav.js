import React from "react";
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
import { BsBookmarkHeart } from "react-icons/bs"

export function ProfileSideNav() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <>
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] max-h-[23rem] md:max-w-[30rem] p-4 shadow-xl md:shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Akun Saya
        </Typography>
      </div>
      <List>
        <a href="/profile" className="text-initial">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </a>
        <a href="/alamat" className="text-initial">
        <ListItem >
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Alamat
        </ListItem>
        </a>
        <a href="/wishlistitem" className="text-initial">
          <ListItem>
            <ListItemPrefix>
              <BsBookmarkHeart className="h-5 w-5" />
            </ListItemPrefix>
            Wishlist
            <ListItemSuffix>
            </ListItemSuffix>
          </ListItem>
        </a>
        <a href="/pesanan" className="text-initial">
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Pesanan Saya
            <ListItemSuffix>
              <Chip value="3" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
        </a>
          <ListItem onClick={handleOpen}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
      </List>
    </Card>
    <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are You Sure Want to Log out.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
        <a href="/" >
          <Button
            variant="gradient"
            color="red"
            onClick={handleOpen}
            className="mr-4"
          >
            <span>Yes</span>
          </Button>
          </a>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>No</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}