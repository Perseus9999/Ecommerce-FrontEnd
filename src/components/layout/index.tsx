import Image from 'next/image';
import logo from '../../../public/assets/ecohub.png';
import SearchIcon from '../icon/searchIcone';
import AppIcon from '../icon/appIcone';
import ProfileIcon from '../icon/profileIcon';
import ShoppingCartIcon from '../icon/cartIcone';
import { Button } from '../ui/button';
import MenuBarIcon from '../icon/menuBarIcon';
import DownArrowIcon from '../icon/downArrowIcone';
import { menuItems } from '../../../data/index';
import { useRouter } from 'next/router';
import { useState } from 'react';
const Layout = () => {
  const router = useRouter();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const visibleItems = menuItems.slice(0, 12);
  const dropdownItems = menuItems.slice(12);
  return (
    <>
      <div className=''>
        <div className='p-4 px-32 flex gap-6 items-center'>
          <div className='1/6 '>
            <Image src={logo} alt='' height={250} width={240} />
          </div>
          <div className='w-5/6 border flex items-center rounded-full'>
            <div className='w-full pl-2'>
              <input
                type='text '
                placeholder='FreshShopping Items '
                className='w-full p-1 focus:outline-none'
              />
            </div>
            <div className='p-2  bg-black rounded-full '>
              <SearchIcon size={24} color='white' />
            </div>
          </div>
          <div className=' w-2/6  flex items-center gap-4 justify-center'>
            <div className=' flex items-center gap-2'>
              <AppIcon size={24} color='black' />
              <span className='text-sm'>
                Download The <span className='block'>EcoHuB App </span>
              </span>
            </div>
            <div className=' flex items-center gap-2'>
              <ProfileIcon size={24} color='black' />
              <span className='text-sm'>
                Welcone <span className='block'>Sign in / Register</span>
              </span>
            </div>
            <div className=' flex items-center gap-2'>
              <ShoppingCartIcon size={24} color='black' />
              <div>
                <span className='bg-black text-white p-1 rounded-full'>0</span>
                <p className='text-sm'>Cart</p>
              </div>
            </div>
          </div>
        </div>

        <div className='px-32 flex gap-6 items-center'>
          <div className='flex items-center bg-gray-400 p-1 rounded-full'>
            <MenuBarIcon size={24} color='black' />
            <Button className='text-[20px]'>All Categories</Button>
            <div className='ml-12'>
              <DownArrowIcon size={24} color='black' />
            </div>
          </div>
          <div className='flex items-center gap-8 '>
            {visibleItems &&
              visibleItems.length > 0 &&
              visibleItems.map((item) => (
                <div
                  key={item.id}
                  className='text-[18px] hover:bg-gray-200 p-3 rounded-xl cursor-pointer'
                  onClick={() => router.push(item.route)}
                >
                  {item.label}
                </div>
              ))}

            {menuItems.length > 12 && (
              <div
                className='relative text-[18px] hover:bg-gray-200 p-3 rounded-xl cursor-pointer'
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                More
                {isDropdownVisible && (
                  <div className='absolute top-full right-0 m-1  w-48 bg-gray-200 shadow-lg rounded-xl z-10'>
                    {dropdownItems.map((item) => (
                      <div
                        key={item.id}
                        className='text-[16px] px-4 py-2 hover:bg-gray-100 cursor-pointer'
                        onClick={() => router.push(item.route)}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
