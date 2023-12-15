import React from 'react'
// import { Chip } from '@material-tailwind/react'
import { BsCheckCircleFill } from 'react-icons/bs'
export const Konfirm = () => {

    return (
        <div className='flex-col flex item-centers gap-2'>
            <BsCheckCircleFill className='h-64 w-64' />
            <p className='text-4xl font-bold' >Sedang Di Proses </p>
        </div>
    )
}
