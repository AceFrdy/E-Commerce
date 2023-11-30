import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
    // CardBody,
    // Card,
} from '@material-tailwind/react';
import { TruckIcon, CubeIcon } from '@heroicons/react/24/solid';
import { BsCheckCircleFill } from 'react-icons/bs'
import { IoRefreshCircleSharp } from 'react-icons/io5'


const courierTimelineData = [
    {
        icon: TruckIcon,
        title: 'Order Placed',
        time: '22 DEC 7:20 PM',
        color: 'blue',
    },
    {
        icon: CubeIcon,
        title: 'Packing',
        time: '22 DEC 11 PM',
        color: 'blue',
    },
    {
        icon: IoRefreshCircleSharp,
        title: 'In Transit',
        time: '23 DEC 2:20 AM',
        color: 'blue',
    },
    {
        icon: BsCheckCircleFill,
        title: 'Delivered',
        time: '24 DEC 4:30 PM',
        color: 'blue-gray',
    },
];

const Pengiriman = () => {
    return (
        <div className="flex flex-row h-screen overflow-auto grid w-full">
            {/* <Header /> */}
            <div>
                {/* <Heading heading="Profile" /> */}
                <div>
                    <div className=" mx-auto px-4">
                        {/* ================= Isi Profile =================== */}
                        <div className="flex flex-col lg:flex-row gap-10 pb-20 responsive-grid">
                            <div className="lg:w-2/5 xl:w-3/5 bg-white p-4">
                                <div className="flex flex-col space-y-4">
                                    <Typography className='mt-6' variant="h2" color="blue-gray">
                                        Pengiriman
                                    </Typography>
                                    <Typography className='mt-6 font-normal' variant="h4" color="blue-gray">
                                        Status : <span className='font-bold'>Transit</span>
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal">
                                        Hari/Tanggal Pemesanan : <span className='font-bold'>22 DEC 7:20 PM</span>
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal">
                                        Estimasi Sampai : <span className='font-bold'>24 DEC 7:20 PM</span>
                                    </Typography>
                                    <Typography variant="h5" color="gray" className="font-normal">
                                        Metode Pembayaran : <span className='font-bold'>Transfer</span>
                                    </Typography>
                                </div>
                            </div>
                            <div className="lg:w-3/5 xl:w-2/5 bg-white p-4">
                                <div className="grid gap-4 ">
                                    <Timeline >
                                        {courierTimelineData.map((item, index) => (
                                            <TimelineItem key={index} className="h-28">
                                                {index !== 4 && <TimelineConnector className="!w-[78px]" />}
                                                <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                                    <TimelineIcon className="p-3" variant="ghost" color={item.color}>
                                                        {React.createElement(item.icon, { className: 'h-5 w-5' })}
                                                    </TimelineIcon>
                                                    <div className="flex flex-col gap-1">
                                                        <Typography variant="h6" color={item.color}>
                                                            {item.title}
                                                        </Typography>
                                                        <Typography variant="small" color="gray" className="font-normal">
                                                            {item.time}
                                                        </Typography>
                                                    </div>
                                                </TimelineHeader>
                                            </TimelineItem>
                                        ))}
                                    </Timeline>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Pengiriman;
