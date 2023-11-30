import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import ProfilesideNave
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/orebiSlice";
import { Wishlist } from "./Wishlist";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { ProfileSideNav } from "../Account/ProfileSideNav";
import HeaderProf from "../../components/home/Header/HeaderProf";
// import { products } from "../../constants";
import Footer from "../../components/home/Footer/Footer";
import FooterBottom from "../../components/home/Footer/FooterBottom";

// const TABS = [
//   {
//     label: "All",
//     value: "all",
//   },
//   {
//     label: "Monitored",
//     value: "monitored",
//   },
//   {
//     label: "Unmonitored",
//     value: "unmonitored",
//   },
// ];

// const wishlistProducts = [
//   {
//     id: 1,
//     name: "Product 1",
//     image: "image_url_1.jpg",
//     description: "Description for Product 1",
//     price: "$19.99",
//     // tambahkan properti lain yang diperlukan
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     image: "image_url_2.jpg",
//     description: "Description for Product 2",
//     price: "$29.99",
//     // tambahkan properti lain yang diperlukan
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     image: "image_url_3.jpg",
//     description: "Description for Product 3",
//     price: "$29.99",
//     // tambahkan properti lain yang diperlukan
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     image: "image_url_4.jpg",
//     description: "Description for Product 4",
//     price: "$29.99",
//     // tambahkan properti lain yang diperlukan
//   },
//   // ...
// ];

const TABLE_HEAD = ["Barang", "Harga", "Warna", "Tanggal", ""];

// const formattedWishlistData = wishlistProducts.map((item) => ({
//   id: item._id,
//   img: item.image, // Assuming the wishlist item has an 'image' attribute
//   name: item.name,
//   price: item.price, // Adjust according to your data
//   date: item.dateAdded, // Assuming there's a 'dateAdded' attribute
// }));

// const TABLE_ROWS = formattedWishlistData;

// const TABLE_ROWS = [
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
//     name: "John Michael",
//     email: "john@creative-tim.com",
//     job: "Manager",
//     org: "Organization",
//     online: true,
//     date: "23/04/18",
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
//     name: "Alexa Liras",
//     email: "alexa@creative-tim.com",
//     job: "Programator",
//     org: "Developer",
//     online: false,
//     date: "23/04/18",
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
//     name: "Laurent Perrier",
//     email: "laurent@creative-tim.com",
//     job: "Executive",
//     org: "Projects",
//     online: false,
//     date: "19/09/17",
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
//     name: "Michael Levi",
//     email: "michael@creative-tim.com",
//     job: "Programator",
//     org: "Developer",
//     online: true,
//     date: "24/12/08",
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
//     name: "Richard Gran",
//     email: "richard@creative-tim.com",
//     job: "Manager",
//     org: "Executive",
//     online: false,
//     date: "04/10/21",
//   },
// ];

export function WishlistItem({ item }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [, setPajak] = useState("");
  // const [pilihKurir, setPilihKurir] = useState(10);

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
    <div className="flex flex-col lg:flex-row h-screen w-screen grid w-full">
      <div>
      <div className="max-w-container mx-auto px-4">
        {/* <Breadcrumbs title="Profile" /> */}
        {/* ================= Products Start here =================== */}
        <div className="w-full h-full flex pb-20 gap-10">
          <div className="lg:w-1/5 md:w-1/4 hidden md:inline-flex h-full">
            <div className="flex flex-col space-y-4">
              <Breadcrumbs title="Profile" />
              <ProfileSideNav />
            </div>
          </div>
          <div className="w-full lg:w-3/4 md:w-5/6 h-full flex flex-col md:gap-10">
            <HeaderProf />
            <Card>
              <CardBody className="overflow-y-auto max-h-96 px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Gunakan grid untuk menampilkan produk */}
                  {products.map((item) => (
                    <div key={item._id}>
                      <Wishlist item={item} />
                    </div>
                  ))}
                </div>
                {/* <table className="mt-4 w-full min-w-max table-auto text-left">
                      <tbody> */}
                {/* {TABLE_ROWS.map(({ img, name, price, date }, index) => {
                          const isLast = index === TABLE_ROWS.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

                          return (
                            <tr key={name}>
                              <td className={classes}>
                                <div className="flex items-center gap-3">
                                  <Avatar src={img} alt={name} size="sm" />
                                  <div className="flex flex-col">
                                    <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal"
                                    >
                                      {name}
                                    </Typography>
                                    <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal opacity-70"
                                    >
                                      {price}
                                    </Typography>
                                  </div>
                                </div>
                              </td> */}

                {/* <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={online ? "online" : "offline"}
                            color={online ? "green" : "blue-gray"}
                          />
                        </div>
                      </td> */}
                {/* <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {date}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Tooltip content="Edit User">
                                  <IconButton variant="text">
                                    <PencilIcon className="h-4 w-4" />
                                  </IconButton>
                                </Tooltip>
                              </td>
                            </tr>
                          );
                        })} */}
                {/* </tbody>
                    </table> */}
              </CardBody>
              <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                  <Button variant="outlined" size="sm">
                    Previous
                  </Button>
                  <Button variant="outlined" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div>
    </div>
  );
}
