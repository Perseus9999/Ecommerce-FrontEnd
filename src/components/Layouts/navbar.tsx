import Image from 'next/image';
import logo from '../../../public/assets/ecohub.png';
import SearchIcon from '../icon/searchIcon';
import CartIcon from '../icon/cartIcon';
import MenuIcon from '../icon/menuIcon';
import ProfileIcon from '../icon/profileIcon';
import CountryIcon from '../icon/countryIcon';
import { useState } from 'react';
import { Button } from '../ui/button';
import DownArrowIcon from '../icon/downArrowIcon';
import { navItem } from '../../../data/data';
import CrossIcon from '../icon/crossIcon';
import MenuList from './menuList';

const Navbar = () => {
  const [isAuthDropdown, setIsAuthDropdown] = useState(false);
  const [menuItems, setMenuItems] = useState(false);

  const handleMouseEnter = () => {
    setIsAuthDropdown(true);
  };
  const handleMouseLeave = () => {
    setIsAuthDropdown(false);
  };

  return (
    <>
      <div className='mx-[5%] mt-1  lg:mx-[7%]'>
        <section className='grid grid-cols-[1fr,3fr]  items-center gap-2 '>
          <div>
            <Image
              src={logo}
              width={500}
              height={500}
              alt='logo'
              className='h-[30px] w-[120px]  lg:h-[45px] lg:w-[170px]'
            />
          </div>
          <div className='grid justify-end grid-cols-[2fr,.2fr,.2fr,.2fr,.2fr] lg:grid-cols-[2.4fr,.3fr,1fr,.3fr,] gap-2 items-center sm:gap-4'>
            <div className='flex justify-end pborder rounded-full '>
              <input
                type='text'
                className='w-full outline-none ml-4 lg:h-[35px] lf:px-2 '
                placeholder='search here...'
              />
              <div className='bg-black rounded-full lg:flex lg:items-center lg:p-2'>
                <SearchIcon color='white' size={24} />
              </div>
            </div>
            <div className='flex justify-end lg:items-center lg:gap-2  '>
              <CountryIcon size={24} />
              <div className='  flex items-end'>
                <div className='hidden lg:block'>
                  <div className='text-[12px]'>EN/</div>
                  <div className='text-[14px] font-semibold'>BDT</div>
                </div>
                <DownArrowIcon color='black' size={12} />
              </div>
            </div>
            <div className='flex justify-end '>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='relative'
              >
                <div className='flex items-center  lg:gap-1'>
                  <ProfileIcon color='black' size={24} />

                  <div className='hidden lg:block'>
                    <div className='text-[12px]'>Welcome</div>
                    <div className='text-[14px] font-semibold'>
                      Sign In / Register
                    </div>
                  </div>
                </div>

                {isAuthDropdown && (
                  <div className='p-2 mt-1 absolute right-0 shadow-lg shadow-gray-400 z-40 bg-white sm:w-[130px] lg:w-[160px]'>
                    <div className='flex justify-center'>
                      <Button className='bg-blue-300 rounded-full text-[16px] w-full'>
                        Sign In
                      </Button>
                    </div>
                    <p className='text-[16px] text-center'>Register</p>
                  </div>
                )}
              </div>
            </div>
            <div className='flex justify-end  lg:items-center  lg:gap:2 '>
              <CartIcon color='black' size={24} />
              <div className='hidden md:block lg:ml-1'>
                <div className='pborder md:h-[17px] bg-black rounded-full'>
                  <div className='mt-[-5px] text-white lg:text-center'>0</div>
                </div>
                <div className='md:hidden lg:block'>cart</div>
              </div>
            </div>
            <div className='flex justify-end lg:hidden'>
              {!menuItems ? (
                <div onClick={() => setMenuItems(true)}>
                  <MenuIcon color='black' size={24} />
                </div>
              ) : (
                <div onClick={() => setMenuItems(false)} className='relative'>
                  <CrossIcon color='black' size={24} />
                  <div className='absolute  right-0 mt-1 h-[150px] w-[130px]  overflow-scroll shadow-2xl'>
                    {navItem.length > 0 &&
                      navItem.map((item) => <MenuList item={item} />)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className='hidden'>
          <div>All</div>
          <div>menu</div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
