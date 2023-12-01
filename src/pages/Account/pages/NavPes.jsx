// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   Card,
//   CardBody,
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";
// import { ItemCardProf } from "./components/ItemCardProf";
// import { ItemCardToko } from "./components/ItemCardToko";


// export default function NavPes() {
//   const products = useSelector((state) => state.orebiReducer.products);
//   const [totalAmt, setTotalAmt] = useState("");
//   const [, setPajak] = useState("");
//   // const [selectedCoupon, setSelectedCoupon] = useState("");
//   // console.log(qris);

//   useEffect(() => {
//     let price = 0;
//     products.map((item) => {
//       price += item.price * item.quantity;
//       return price;
//     });
//     setTotalAmt(price);
//   }, [products]);
//   useEffect(() => {
//     if (totalAmt <= 200) {
//       setPajak(30);
//     } else if (totalAmt <= 400) {
//       setPajak(25);
//     } else if (totalAmt > 401) {
//       setPajak(20);
//     }
//   }, [totalAmt]);
//   // const { countries } = useCountries();
//   const [type, setType] = React.useState("card");
//   // const [cardNumber, setCardNumber] = React.useState("");
//   // const [cardExpires, setCardExpires] = React.useState("");

//   return (
//     <Card className="w-full max-w-full">
//       {/* <CardHeader
//         color="gray"
//         floated={false}
//         shadow={false}
//         className="m-0 grid place-items-center px-4 py-8 text-center"
//       >
//         <div className="mb-4 h-5 p-6 text-white">
//           {type === "card" ? (
//             <CreditCardIcon className="h-10 w-10 text-white" />
//           ) : (
//             <img
//               alt="paypal "
//               className="w-2 "
//               src="https://docs.material-tailwind.com/icons/paypall.png"
//             />
//           )}
//         </div>
//         <Typography variant="h5" color="white">
//           Material Tailwind PRO
//         </Typography>
//       </CardHeader> */}
//       <CardBody>
//         <Tabs value={type} className="overflow-visible">
//           <TabsHeader className="relative z-0 ">
//             <Tab value="belum" onClick={() => setType("belum")}>
//               Belum Bayar
//             </Tab>
//             <Tab value="toko" onClick={() => setType("toko")}>
//               Diambil Ditoko
//             </Tab>
//           </TabsHeader>
//           <TabsBody
//             className="!overflow-x-hidden !overflow-y-visible"
//             animate={{
//               initial: {
//                 x: type === "card" ? 400 : -400,
//               },
//               mount: {
//                 x: 0,
//               },
//               unmount: {
//                 x: type === "card" ? 400 : -400,
//               },
//             }}
//           >
//             <TabPanel value="belum" className="p-0">
//               <h1 className="font-semibold text-lg mt-2 mb-2 ">
//                 Pesanan Yang belum Dibayar
//               </h1>
//               <div className="w-[100%] mt-2 divide-y-2 divide-gray-400/25 rounded-lg h-full bg-[#F5F7F7] text-primeColor hidden lgl:grid auto-rows-auto grid-row-1 grid-flow-row gap-4 px-6 text-lg font-titleFont font-semibold">
//                 {products.map((item) => (
//                   <div key={item._id}>
//                     <ItemCardProf item={item} />
//                   </div>
//                 ))}
//               </div>
//               {/* <form className="mt-12 flex flex-col gap-4">
//                 <div>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 font-medium"
//                   >
//                     Your Email
//                   </Typography>
//                   <Input
//                     type="email"
//                     placeholder="name@mail.com"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                 </div>
 
//                 <div className="my-3">
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 font-medium "
//                   >
//                     Card Details
//                   </Typography>
 
//                   <Input
//                     maxLength={19}
//                     // value={formatCardNumber(cardNumber)}
//                     onChange={(event) => setCardNumber(event.target.value)}
//                     icon={
//                       <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
//                     }
//                     placeholder="0000 0000 0000 0000"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                   <div className="my-4 flex items-center gap-4">
//                     <div>
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="mb-2 font-medium"
//                       >
//                         Expires
//                       </Typography>
//                       <Input
//                         maxLength={5}
//                         // value={formatExpires(cardExpires)}
//                         onChange={(event) => setCardExpires(event.target.value)}
//                         containerProps={{ className: "min-w-[72px]" }}
//                         placeholder="00/00"
//                         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                         labelProps={{
//                           className: "before:content-none after:content-none",
//                         }}
//                       />
//                     </div>
//                     <div>
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="mb-2 font-medium"
//                       >
//                         CVC
//                       </Typography>
//                       <Input
//                         maxLength={4}
//                         containerProps={{ className: "min-w-[72px]" }}
//                         placeholder="000"
//                         className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                         labelProps={{
//                           className: "before:content-none after:content-none",
//                         }}
//                       />
//                     </div>
//                   </div>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 font-medium"
//                   >
//                     Holder Name
//                   </Typography>
//                   <Input
//                     placeholder="name@mail.com"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                 </div>
//                 <Button size="lg">Pay Now</Button>
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
//                 >
//                   <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
//                   secure and encrypted
//                 </Typography>
//               </form> */}
//             </TabPanel>
//             <TabPanel value="toko" className="p-0">
//               <h1 className="font-semibold text-lg mt-2 mb-2 ">
//                 Pesanan Yang Diambil Di Toko
//               </h1>
//               <div className="w-[100%] mt-2 divide-y-2 divide-gray-400/25 rounded-lg h-full bg-[#F5F7F7] text-primeColor hidden lgl:grid auto-rows-auto grid-row-1 grid-flow-row gap-4 px-6 text-lg font-titleFont font-semibold">
//                 {products.map((item) => (
//                   <div key={item._id}>
//                     <ItemCardToko item={item} />
//                   </div>
//                 ))}
//               </div>
//               {/* <form className="mt-12 flex flex-col gap-4">
//                 <div>
//                   <Typography
//                     variant="paragraph"
//                     color="blue-gray"
//                     className="mb-4 font-medium"
//                   >
//                     Personal Details
//                   </Typography>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 font-medium"
//                   >
//                     Your Email
//                   </Typography>
//                   <Input
//                     type="email"
//                     placeholder="name@mail.com"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                 </div>
 
//                 <div className="my-6">
//                   <Typography
//                     variant="paragraph"
//                     color="blue-gray"
//                     className="mb-4 font-medium"
//                   >
//                     Billing Address
//                   </Typography>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mb-2 font-medium"
//                   >
//                     Country
//                   </Typography>
//                   <Select
//                     placeholder="USA"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                     menuProps={{ className: "h-48" }}
//                   >
//                     {countries.map(({ name, flags }: any) => (
//                       <Option key={name} value={name}>
//                         <div className="flex items-center gap-x-2">
//                           <img
//                             src={flags.svg}
//                             alt={name}
//                             className="h-4 w-4 rounded-full object-cover"
//                           />
//                           {name}
//                         </div>
//                       </Option>
//                     ))}
//                   </Select>
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="mt-4 -mb-2 font-medium"
//                   >
//                     Postal Code
//                   </Typography>
//                   <Input
//                     placeholder="0000"
//                     className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                     containerProps={{ className: "mt-4" }}
//                   />
//                 </div>
//                 <Button size="lg">pay with paypal</Button>
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="flex items-center justify-center gap-2 font-medium opacity-60"
//                 >
//                   <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
//                   secure and encrypted
//                 </Typography>
//               </form> */}
//             </TabPanel>
//           </TabsBody>
//         </Tabs>
//       </CardBody>
//     </Card>
//   );
// }
