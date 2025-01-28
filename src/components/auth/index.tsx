import { useState } from 'react';
import ProfileIcon from '../icon/profileIcon';

const Auth = () => {
  const [isAuthDropdown, setIsAuthDropdown] = useState(false);

  return (
    <div className='relative' onMouseEnter={() => setIsAuthDropdown(true)}>
      <div className='flex items-center gap-2 cursor-pointer'>
        <ProfileIcon color='black' size={24} />
        <div className='hidden lg:block'>
          <span className='text-sm'>
            Welcome <span className='block'>Sign in / Register</span>
          </span>
        </div>
      </div>

      {isAuthDropdown && (
        <div className='absolute right-0 mt-1 sm:w-[150px] lg:w-[200px] p-2 shadow-lg shadow-gray-400 z-40 bg-white'>
          <p className='text-center bg-black text-white p-2 rounded-full cursor-pointer'>
            Sign In
          </p>
          <p className='text-center text-[14px] mt-1 cursor-pointer'>
            Register
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;
