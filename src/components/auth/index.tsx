import { useState } from 'react';
import ProfileIcon from '../icon/profileIcon';

const Auth = () => {
  const [isAuthDropdown, setIsAuthDropdown] = useState(false);
  const handleMouseEnter = () => {
    setIsAuthDropdown(!isAuthDropdown);
  };
  const handleMouseLeave = () => {
    setIsAuthDropdown(!isAuthDropdown);
  };

  return (
    <>
      <div
        className='flex items-center gap-2'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ProfileIcon color='black' size={24} />
        <div className='hidden xl:block cursor-pointer'>
          <span className='text-sm'>
            Welcome <span className='block'>Sign in / Register</span>
          </span>
        </div>
      </div>

      <div className='relative'>
        {isAuthDropdown && (
          <div className='absolute right-0 mt-1 sm:w-[150px] lg:w-[200px] p-2 shadow-lg shadow-gray-400 z-40'>
            <p className='text-center bg-black text-white p-2 rounded-full'>
              Sign In
            </p>
            <p className='text-center text-[14px] mt-1'>Register</p>
          </div>
        )}
      </div>
    </>
  );
};
export default Auth;
