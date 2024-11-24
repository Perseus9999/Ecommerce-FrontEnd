import React from 'react';

type Props = {
  color?: string;
  size?: string;
  className?: string;
};

const RightArrowIcon = ({ size, color, className }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='-77 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
      fill={color}
      className={className}
    >
      <title>Right Arrow</title>
      <path d='M98 460L64 426 227 262 64 98 98 64 294 262 98 460Z' />
    </svg>
  );
};

export default RightArrowIcon;
