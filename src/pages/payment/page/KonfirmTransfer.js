import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
    Card,
    CardBody,
} from "@material-tailwind/react";

export function KonfirmTransfer() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Card>
                <CardBody>
                <div>
                    <div>
                        <Card className="flex justify-around h-64 w-full">
                        {/* <p className="flex text-gray-400 items-center border-[0px] border-gray-400 border-b-0 py-1.5 text-lg font-medium">
                            Shipping
                            <span className="font-semibold text-red-600 tracking-wide font-titleFont">
                                Free
                            </span>
                        </p> */}
                        </Card>
                    </div>
                    <Typography variant="lead" className="font-bold flex px-6 py-6 item-center">Petunjuk Transfer</Typography>
                    <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className={`border-b-0 transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                                }`}
                        >
                            Transfer MBanking
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            Masuk menu Mobile Banking BRI, pilih <span className="font-semibold">Pembayarana &gt; BRIVA</span>
                            <br />
                            <span>Masukan Nomor BRIVA 098 1786 1657 8791</span>
                            <span>Selanjutnya, masukan <span className="font-semibold">PIN</span>Anda pilih Send.Pesan Konfirmasi<br/>
                            Menggunakan SMS pilih <span className="font-semibold">OK</span>. Status Transaksi akan dikirimkan melalui SMS <br/>
                            datap digunakan sebagai bukti pembayaran.</span>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className={`border-b-0 transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                                }`}
                        >
                            Transfer E-Wallet
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className={`border-b-0 transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                                }`}
                        >
                            Transfer ATM
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-base font-normal">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </div>
                </CardBody>
            </Card>
        </>
    );
}