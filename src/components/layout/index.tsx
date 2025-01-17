import Image from 'next/image';
import logo from '../../../public/assets/ecohub.png';
import SearchIcon from '../icon/searchIcone';
import AppIcon from '../icon/appIcone';
import ProfileIcon from '../icon/profileIcon';
import ShoppingCartIcon from '../icon/cartIcone';
import { Button } from '../ui/button';
import MenuBarIcon from '../icon/menuBarIcon';
import DownArrowIcon from '../icon/downArrowIcone';
import '@/styles/globals.css';
import NavbarListMenu from './navbarListMenu';
const Layout = () => {
  return (
    <>
      <div className='parent-container border'>
        {/* TOP NAVBAR PART */}

        <div className='navbar-first'>
          <section className='flex items-center justify-start'>
            <Image src={logo} alt='' height={250} width={240} />
          </section>
          <section className=' border rounded-full'>
            <div className=' flex items-center justify-center'>
              <input
                type='text '
                placeholder='FreshShopping Items '
                className='w-full ml-1 pl-2 focus:outline-none '
              />
              <div className='p-2  bg-black rounded-full '>
                <SearchIcon size={24} color='white' />
              </div>
            </div>
          </section>
          <section className='flex items-center justify-end gap-4 border'>
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
          </section>
        </div>

        {/* BOTTOM NAVBAR PART */}

        <div className='flex items-center gap-4 mt-2'>
          <section className='flex items-center bg-gray-400 px-4 rounded-full'>
            <MenuBarIcon size={24} color='black' />
            <Button className='text-[20px]'>All Categories</Button>
            <section className='ml-12'>
              <DownArrowIcon size={24} color='black' />
            </section>
          </section>
          <section>
            <NavbarListMenu />
          </section>
        </div>
      </div>
    </>
  );
};

export default Layout;
