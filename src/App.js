import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
// import Category from "./components/home/Category/Cat/CatAcc";
import Profile from "./pages/Account/Profile";
import ProfileData from "./pages/Account/pages/ProfileData";
import Alamat from "./pages/Account/pages/Alamat";
import AlamatEmpty from "./pages/Account/pages/AlamatEmpty";
import { Pesanan } from "./pages/Account/pages/Pesanan";
import COD from "./pages/payment/page/COD";
import Transfer from "./pages/payment/page/Transfer";
import Qris from "./pages/payment/page/Qris";
import ProductComparison from "./components/home/Products/component/ProductComparison";
import CatAcc from "./components/home/Category/Cat/CatAcc";
import BelumBayar from "./pages/Account/pages/NavPesanan/BelumBayar";
import Diambil from "./pages/Account/pages/NavPesanan/DiambilToko";
import Dikemas from "./pages/Account/pages/NavPesanan/Dikemas";
import Dikirim from "./pages/Account/pages/NavPesanan/Dikirim";
import PesananSelesai from "./pages/Account/pages/NavPesanan/PesananSelesai";
import { KonfirmTransfer } from "./pages/payment/page/KonfirmTransfer";
import { WishlistItem } from "./pages/Wishlist/WishlistItem"; 

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/layout" element={<LayoutAd />}>
        
      </Route> */}
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>

        <Route path="/compare" element={<ProductComparison />}></Route>

        <Route path="/konfirmasitransfer" element={<KonfirmTransfer />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/category/:_id" element={<CatAcc />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
        <Route path="/cod" element={<COD />}></Route>
        <Route path="/transfer" element={<Transfer />}></Route>
        <Route path="/qris" element={<Qris />}></Route>
      </Route>
      <Route path="/profiledata" element={<ProfileData />}></Route>
      <Route path="/belumBa" element={<BelumBayar />}></Route>
      <Route path="/ambil" element={<Diambil />}></Route>
      <Route path="/dikirim" element={<Dikirim />}></Route>
      <Route path="/dikemas" element={<Dikemas />}></Route>
      <Route path="/pesananselesai" element={<PesananSelesai />}></Route>
      <Route path="/alamat" element={<Alamat />}></Route>
      <Route path="/alamatisi" element={<AlamatEmpty />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/pesanan" element={<Pesanan />}></Route>
      <Route path="/wishlistitem" element={<WishlistItem />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      {/* ==================== Admin Navlink here ===================== */}
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;