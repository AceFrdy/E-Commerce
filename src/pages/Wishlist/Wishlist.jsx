import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../src/redux/orebiSlice';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';

export const Wishlist = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Card className="w-48">
      <CardHeader shadow={false} floated={false} className="h-40">
        <img
          src={item.image}
          alt="productImage"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {item.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${item.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          Warna Ireng
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
        <div className="relative flex items-center">
          <Button
            onClick={() => dispatch(deleteItem(item._id))}
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Hapus
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
