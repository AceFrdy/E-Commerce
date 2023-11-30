import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoPricetags } from 'react-icons/io5';
import { Button, Input } from '@material-tailwind/react';
import { BiCaretDown } from "react-icons/bi";

export const Promo = () => {
    const [showPromoInput, setShowPromoInput] = useState(false);

    return (
        <div className="px-2">
            <div onClick={() => setShowPromoInput(!showPromoInput)} className="cursor-pointer border-b border-gray-500 p-2 mb-2">
                <h2 className="flex items-center gap-1">
                    <IoPricetags className="h-5 w-7" />
                    Kode Promo
                    <BiCaretDown />
                </h2>
            </div>

            {showPromoInput && (
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row">
                        <Input
                            type="text"
                            label="Masukan Kode..."
                            // value={email}
                            // onChange={onChange}
                            className="rounded-t rounded-b sm:rounded-t md:rounded-l lg:rounded-l"
                            containerProps={{
                                className: "min-w-auto",
                            }}
                        />
                        <Button
                            size="sm"
                            // color={email ? "gray" : "blue-gray"}
                            // disabled={!email}
                            className="rounded-t rounded-b"
                        >
                            Gunakan
                        </Button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};
