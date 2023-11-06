import { useState } from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';

const WishlistIcon = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`cursor-pointer ${isClicked ? 'text-red-500' : 'text-gray-500'}`}
      onClick={handleClick}
    >
      {/* Replace this with your icon */}
      <BsSuitHeartFill />
    </div>
  );
};

export default WishlistIcon;
