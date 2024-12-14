import Image from 'next/image';
import logo from '@/image/ecohub.jpeg';
import { MenuIcon } from 'lucide-react';
import SearchBar from './SearchBar';
import CartIcon from '@/icon/cartIcon';
import ProfileIcon from '@/icon/profileIcon';
import { Register } from '../auth/register';
import { SignIn } from '../auth/signIn';

const MainHeader = () => {
  return (
    <div className='flex items-center gap-[20px] bg-gray-200 px-10 py-2'>
      <div className='w-[10%]'>
        <Image
          src={logo}
          width={200}
          height={300}
          alt='Picture of the author'
        />
      </div>
      <div className='bg-gray-400 p-2 rounded-full'>
        <MenuIcon />
      </div>
      <div className='w-[60%]'>
        <SearchBar />
      </div>
      <div className='mx-10'>
        <div className='flex justify-center gap-[40px] '>
          <div className='relative group'>
            <div className='flex items-center gap-1 cursor-pointer'>
              <ProfileIcon color='black' size='22' />
              <p className='leading-none p-2'>
                <span className='block text-xs'>welcome</span>
                <span className='text-xs'>Sign In/Register</span>
              </p>
            </div>
            <div className='absolute left-[-10px]  bg-white shadow-lg rounded-md p-4 hidden group-hover:block w-[200px]'>
              <ul className=' text-black '>
                <li className='mb-2'>
                  <SignIn />
                </li>
                <li className='text-center text-sm text-gray-500 cursor-pointer '>
                  <Register />
                </li>
              </ul>
            </div>
          </div>

          <div className='flex items-center gap-1'>
            <CartIcon color='black' size='22' />
            <p className='leading-none'>
              <span className='block text-xs'>0</span>
              <span className='text-xs'>cart</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
