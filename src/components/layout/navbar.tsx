import Image from 'next/image';
import logo from '../../../public/assets/ecohub.png';
import AppIcon from '../icon/appIcone';

import ShoppingCartIcon from '../icon/cartIcone';
import MenuBarIcon from '../icon/menuBarIcon';
import SearchIcon from '../icon/searchIcone';
import DownArrowIcon from '../icon/downArrowIcone';
import { useState } from 'react';
import { Button } from '../ui/button';
import { navItem } from '../../../data/data';
import NavbarItem from './navbarItem';
import { useRouter } from 'next/router';
import Auth from '../auth';
import CountryIcon from '../icon/countryIcon';

const Navbar = () => {
  const router = useRouter();
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
          isSearchVisible
            ? 'sm:grid-cols-[130px,1fr,.5fr] md:grid-cols-[130px,1fr,.5fr]'
            : 'sm:grid-cols-2'
        } lg:grid-cols-[180px,1fr,450px] xl:grid-cols-[200px,1fr,420px] 2xl:grid-cols-[200px,1fr,450px] `}
      >
        {/* Logo Section */}
        <section className=''>
          <div className='w-[130px] h-[26px] lg:w-[180px] flex items-center'>
            <Image src={logo} alt='logo' height={400} width={400} />
          </div>
        </section>

        {/* Search Section */}

        <section
          className={`${
            isSearchVisible ? 'flex' : 'hidden lg:flex'
          } items-center justify-between border border-black rounded-full`}
        >
          <div className='flex-1'>
            <input
              type='text'
              placeholder='search items..'
              className='w-full text-[16px] mx-2 pl-2 outline-none'
            />
          </div>
          <div className='bg-black rounded-full p-2 cursor-pointer'>
            <SearchIcon color='white' size={24} />
          </div>
        </section>

        <section className='flex items-center gap-4 justify-end md:gap-4 lg:gap-4 xl:gap-3 2xl:gap-4 '>
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
            <div className='hidden lg:block cursor-pointer'>
              <span className='text-sm'>
                Welcome<span className='block'>EcoHuB App</span>
              </span>
            </div>
          </div>

          {/* Country Icon */}
          <div className='flex items-center gap-2'>
            {/* Flag */}
            <CountryIcon color='#259245' size={24} />
            <div className='hidden lg:block cursor-pointer'>
              <span className='text-sm'>
                {/* Language */}
                EN/
                <span className='block'>
                  {/* Currency */}
                  BDT
                </span>
              </span>
            </div>
          </div>

          {/* Shopping Cart Icon */}
          <div className='flex items-center gap-2'>
            <ShoppingCartIcon color='black' size={24} />
            <div className='hidden lg:block cursor-pointer'>
              <span className='bg-black text-white p-1 rounded-full'>0</span>
              <p className='text-sm'>Cart</p>
            </div>
          </div>

          {/* Profile Icon */}
          <div>
            <Auth />
          </div>

          {/* Menu Bar Icon */}
          <div className='relative lg:hidden' onClick={handleMenuVisible}>
            <MenuBarIcon color='black' size={24} />
            {isMenuVisible && (
              <div className='absolute  right-0 mt-1 w-[200px] '>
                {navItem.slice(0, 7).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => router.push(item.route)}
                    className='px-2 my-1 hover:bg-white'
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* SECOND PART */}

      <div className='parent-container hidden lg:block mt-1 '>
        <div className='  flex items-center gap-6 '>
          <section className='flex items-center bg-[#f5f5f5] px-4 rounded-full'>
            <MenuBarIcon size={24} color='black' />
            <Button className='text-[18px]'>All Categories</Button>
            <div className='ml-12'>
              <DownArrowIcon size={24} color='black' />
            </div>
          </section>
          <section>
            <NavbarItem items={navItem} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Navbar;
