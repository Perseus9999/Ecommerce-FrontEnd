import Image from 'next/image';
import logo from '../../../public/assets/ecohub.png';
import SearchIcon from '../icon/searchIcone';
import AppIcon from '../icon/appIcone';
import ProfileIcon from '../icon/profileIcon';
import ShoppingCartIcon from '../icon/cartIcone';
import { Button } from '../ui/button';
import MenuBarIcon from '../icon/menuBarIcon';
import DownArrowIcon from '../icon/downArrowIcone';
import { navItem } from '../../../data/data';
import NavbarListItem from './navbarLiteItem';

const Navbar = () => {
  return (
    <div className='parent-container '>
      <div className='navbar-container '>
        <section className='flex items-center'>
          <Image src={logo} alt='' height={250} width={200} />
        </section>
        <section className=' flex items-center pl-2 border-2 border-black rounded-full'>
          <div className='w-full '>
            <input
              type='text'
              placeholder='search items...'
              className='w-full px-2 focus:outline-none text-[16px]'
            />
          </div>
          <div className=' bg-black p-2 rounded-full'>
            <SearchIcon color='white' size={24} />
          </div>
        </section>
        <section className=' flex justify-end gap-4'>
          <div className='flex items-center gap-2'>
            <div>
              <AppIcon color='black' size={24} />
            </div>
            <div>
              <span className='text-sm '>
                Download the <span className='block'>EcoHuB App </span>
              </span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div>
              <ProfileIcon color='black' size={24} />
            </div>
            <div>
              <span className='text-sm '>
                Welcome <span className='block'>Sign in /Register </span>
              </span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div>
              <ShoppingCartIcon color='black' size={24} />
            </div>
            <div>
              <span className='bg-black text-white p-1 rounded-full'>0</span>
              <p className='text-sm'>Cart</p>
            </div>
          </div>
        </section>
        <section className='flex items-center bg-[#f5f5f5] px-4 rounded-full'>
          <MenuBarIcon size={24} color='black' />
          <Button className='text-[20px]'>All Categories</Button>
          <section className='ml-12'>
            <DownArrowIcon size={24} color='black' />
          </section>
        </section>
        <section className='col-span-2 border'>
          <NavbarListItem item={navItem} />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
