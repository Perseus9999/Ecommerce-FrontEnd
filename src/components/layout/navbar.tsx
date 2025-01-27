import Image from 'next/image';
import logo from '../../../public/assets/ecohub.png';
import AppIcon from '../icon/appIcone';
import ProfileIcon from '../icon/profileIcon';
import ShoppingCartIcon from '../icon/cartIcone';
import MenuBarIcon from '../icon/menuBarIcon';
import SearchIcon from '../icon/searchIcone';
import DownArrowIcon from '../icon/downArrowIcone';
import { useState } from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleMenuVisible = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleSearchVisible = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <>
      <div
        className={` parent-container grid items-center gap-4 ${
          isSearchVisible ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
        } lg:grid-cols-3 bordertest`}
      >
        {/* Logo Section */}
        <section className=' lg:w-[200px] '>
          <div className='w-[130px] h-[26px] xl:w-[180px] flex items-center'>
            <Image src={logo} alt='logo' height={400} width={400} />
          </div>
        </section>

        {/* Search Section */}
        <section
          className={`${
            isSearchVisible ? 'block' : 'hidden lg:block'
          }  flex items-center justify-between border border-black rounded-full  lg:flex xl:py-1 `}
        >
          <div>
            <input
              type='text'
              placeholder='search items..'
              className='w-full focus:outline-none text-[16px] mx-2 '
            />
          </div>
          <div className='bg-black rounded-full xl:p-2'>
            <SearchIcon color='white' size={24} />
          </div>
        </section>

        {/* Icons and Menu Section */}
        <section className='flex items-center gap-3 justify-end '>
          {/* Small Search Icon (Hidden on lg and above) */}
          <div>
            {!isSearchVisible && (
              <div className='md:block lg:hidden' onClick={handleSearchVisible}>
                <SearchIcon color='black' size={24} />
              </div>
            )}
          </div>

          {/* App Icon */}
          <div className='flex items-center gap-2'>
            <AppIcon color='black' size={24} />
            <div className='hidden xl:block'>
              <span className='text-sm'>
                Welcome<span className='block'>EcoHuB App</span>
              </span>
            </div>
          </div>

          {/* Shopping Cart Icon */}
          <div className='flex items-center gap-2'>
            <ShoppingCartIcon color='black' size={24} />
            <div className='hidden xl:block'>
              <span className='bg-black text-white p-1 rounded-full'>0</span>
              <p className='text-sm'>Cart</p>
            </div>
          </div>

          {/* Profile Icon */}
          <div className='flex items-center gap-2'>
            <ProfileIcon color='black' size={24} />
            <div className='hidden xl:block'>
              <span className='text-sm'>
                Welcome <span className='block'>Sign in / Register</span>
              </span>
            </div>
          </div>

          {/* Menu Bar Icon */}
          <div className='relative lg:hidden' onClick={handleMenuVisible}>
            <MenuBarIcon color='black' size={24} />
            {isMenuVisible && <div className='absolute'>Menu Content</div>}
          </div>
        </section>
      </div>

      {/* SECOND PART */}

      <div className='parent-container hidden lg:block mt-1'>
        <div className='  flex items-center gap-4  '>
          <section className='flex items-center bg-[#f5f5f5] px-4 rounded-full'>
            <MenuBarIcon size={24} color='black' />
            <Button className='text-[18px]'>All Categories</Button>
            <div className='ml-12'>
              <DownArrowIcon size={24} color='black' />
            </div>
          </section>
          <section>lknfkldsn</section>
        </div>
      </div>
    </>
  );
};

export default Navbar;
