import React from 'react'
import { TbRotateClockwise, TbTruckDelivery } from "react-icons/tb"

export const Info = () => {
    return (
        <div className=" mt-10 flex justify-around">
            <div className="flex flex-col grid justify-items-center">
                <TbRotateClockwise className="w-20 h-20" />
                <div>Free Return
                </div>
                <div>
                    60 days to change your mind
                </div>
            </div>
            <div className=" flex flex-col grid justify-items-center">
                <TbTruckDelivery className="w-20 h-20" />
                <div>
                    Free Shipping
                </div>
                <div>from $50.00</div>
            </div>
        </div>
    )
}
