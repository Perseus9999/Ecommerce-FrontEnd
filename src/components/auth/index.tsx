import { useState } from 'react';
import ProfileIcon from '../icon/profileIcon';
import { Register } from './Register';

const Auth = () => {
  const [isAuthDropdown, setIsAuthDropdown] = useState(false);

  const handleMouseEnter = () => {
    setIsAuthDropdown(true);
  };

  const handleMouseLeave = () => {
    setIsAuthDropdown(false);
  };

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex items-center gap-2 cursor-pointer'>
        <ProfileIcon color='black' size={24} />
        <div className='hidden lg:block'>
          <span className='text-sm'>
            Welcome <span className='block'>Sign in / Register</span>
          </span>
        </div>
      </div>

      {isAuthDropdown && (
        <div className='absolute right-0  sm:w-[150px] lg:w-[200px] p-2 shadow-lg shadow-gray-400 z-40 bg-white'>
          <div>
            <p className='text-center bg-black text-white p-2 rounded-full cursor-pointer'>
              Sign In
            </p>
          </div>
          <div>
            {/* <p className='text-center text-[14px] mt-1 cursor-pointer'>
              Register
            </p> */}
            <Register />
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
