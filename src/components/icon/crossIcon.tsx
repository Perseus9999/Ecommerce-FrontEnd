import React from 'react';

interface CrossIconProps {
  size?: number;
  color?: string;
}

const CrossIcon: React.FC<CrossIconProps> = ({ size, color }) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z' />
    </svg>
  );
};

export default CrossIcon;
