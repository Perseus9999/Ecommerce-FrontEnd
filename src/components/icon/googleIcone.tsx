import React from 'react';

interface GoogleIconProps {
  size?: number; // Size of the icon
}

const GoogleIcon: React.FC<GoogleIconProps> = ({ size = 32 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      width={size}
      height={size}
    >
      <path
        d='M16 13.7h14.1c.2 1 .2 2 .2 3 0 5.7-3.9 10.3-9.7 11.7L16 23c2.2-.1 4.1-1.5 5-3.4H16v-5.9z'
        fill='#4285F4'
      />
      <path
        d='M16 25.6c-4.4 0-8.3-2.6-10.2-6.4L1.9 24C4.8 28.4 10.1 31 16 31c4.3 0 8.2-1.5 11.3-4.1l-5.8-4.5c-1.3 1.2-3 2-4.8 2z'
        fill='#34A853'
      />
      <path
        d='M5.8 18.5C5.4 17.2 5.2 15.6 5.2 14s.2-3.2.6-4.5L.7 6C-.1 8 0 11 0 14s.1 6 1.4 8.5l4.4-4z'
        fill='#FBBC05'
      />
      <path
        d='M16 5.4c2.4 0 4.6.8 6.4 2.3l4.8-4.7C24 1 20.2 0 16 0 10.1 0 4.8 2.6 1.9 6.9l5.9 5.6c2-3.7 5.8-7.1 8.2-7.1z'
        fill='#EA4335'
      />
    </svg>
  );
};

export default GoogleIcon;
