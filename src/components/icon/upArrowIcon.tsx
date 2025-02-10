import React from 'react';

interface UpArrowIconProps {
  size?: number;
  color?: string;
}

const UpArrowIcon: React.FC<UpArrowIconProps> = ({
  size = 24,
  color = 'black',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 10L7.5 3L14 10' stroke={color} strokeLinecap='square' />
    </svg>
  );
};

export default UpArrowIcon;
