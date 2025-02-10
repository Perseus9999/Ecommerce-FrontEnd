import React from 'react';

interface MenuBarIconProps {
  size?: number;
  color?: string;
}

const MenuIcon: React.FC<MenuBarIconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
      fill={color}
    >
      <g>
        <rect x='6' y='22' width='36' height='4' />
        <rect x='6' y='10' width='36' height='4' />
        <rect x='6' y='34' width='36' height='4' />
      </g>
    </svg>
  );
};

export default MenuIcon;
