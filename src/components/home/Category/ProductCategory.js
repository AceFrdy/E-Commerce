import React from "react";
import Image from "../../designLayouts/Image";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

const ProductCategory = (props) => {
    // const dispatch = useDispatch();
    const _id = props.productName;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);

    const navigate = useNavigate();
    const productItem = props;
    const handleProductDetails = () => {
        navigate(`/category/${rootId}`, {
            state: {
                item: productItem,
            },
        });
    };
    return (
        <div className="w-full relative group">
            <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
                <div onClick={handleProductDetails}>
                    <Image className="w-full h-full" imgSrc={props.img} onClick={handleProductDetails} />
                </div>
            </div>
            <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
                <div className="justify-between font-titleFont">
                    <h2 className="flex text-sm text-primeColor font-bold">
                        {props.productName}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;
