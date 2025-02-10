import React from 'react';

interface DownArrowIconProps {
  size?: number;
  color?: string;
}

const DownArrowIcon: React.FC<DownArrowIconProps> = ({
  size = 24,
  color = 'black',
}) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox='0 -6 524 524'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Down Arrow</title>
      <path d='M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z' />
    </svg>
  );
};

export default DownArrowIcon;
