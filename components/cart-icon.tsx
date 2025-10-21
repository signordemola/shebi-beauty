import { ShoppingBagIcon } from "lucide-react";
import React from "react";

interface CartIconProps {
  className?: string;
  number?: number;
}

const CartIcon = ({ className, number = 20 }: CartIconProps) => {
  console.log(number);

  const numLength = number.toString().length;

  const badgeStyles =
    numLength === 1
      ? "px-1.5 py-0.5 -top-2 -right-3"
      : numLength === 2
      ? "px-1.5 py-1 -top-3 -right-3"
      : "px-2 py-2 -top-4 -right-5";

  return (
    <div className={`relative ${className}`}>
      <ShoppingBagIcon />
      <span
        className={`absolute bg-primary flex justify-center items-center rounded-full text-xs text-white ${badgeStyles}`}
      >
        {number}
      </span>
    </div>
  );
};

export default CartIcon;
