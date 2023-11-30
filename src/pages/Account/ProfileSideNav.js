import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  // PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  // Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { BsBookmarkHeart } from "react-icons/bs"
import { Link } from "react-router-dom";

export function ProfileSideNav() {
  return (
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
        {/* </Link> */}
        {/* <Link to="/alamat">  */}
        <a href="/alamat" className="text-initial">
        <ListItem >
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Alamat
        </ListItem>
        </a>
        {/* </Link> */}
        <a href="/wishlistitem" className="text-initial">
        {/* <Link to="/pesanan"> */}
          <ListItem>
            <ListItemPrefix>
              <BsBookmarkHeart className="h-5 w-5" />
            </ListItemPrefix>
            Wishlist
            <ListItemSuffix>
              {/* <Chip value="3" size="sm" variant="ghost" color="blue-gray" className="rounded-full" /> */}
            </ListItemSuffix>
          </ListItem>
        {/* </Link> */}
        </a>
        <a href="/pesanan" className="text-initial">
        {/* <Link to="/pesanan"> */}
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Pesanan Saya
            <ListItemSuffix>
              <Chip value="3" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
        {/* </Link> */}
        </a>
        <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}