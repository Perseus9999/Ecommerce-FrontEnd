import React from 'react';
type Props = {
  color?: string;
  size?: string;
  className?: string;
};
const CartIcon = ({ color, size, className }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M5 7H13H18.79C19.9733 7 20.8978 8.02164 20.7801 9.19901L20.1801 15.199C20.0779 16.2214 19.2175 17 18.19 17H8.63961C7.68625 17 6.86542 16.3271 6.67845 15.3922L5 7Z'
        stroke={color}
        strokeWidth='2'
        strokeLinejoin='round'
      />
      <path
        d='M5 7L4.18937 3.75746C4.07807 3.3123 3.67809 3 3.21922 3H2'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 21H10'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 21H18'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CartIcon;
