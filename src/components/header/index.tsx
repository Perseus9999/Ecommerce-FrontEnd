import ProfileIcon from '@/icon/profileIcon';
import SearchBar from './SearchBar';
import CartIcon from '@/icon/cartIcon';
import AllCategories from './AllCategories';
import MenuList from './MenuList';
import Image from 'next/image';
import logo from '@/image/ecohub.jpeg';
import { Button } from '@/components/ui/button';
import { SignIn } from '../auth/signIn';
import { Register } from '../auth/register';

const TopHeader = () => {
  return (
    <div className='bg-[#191919] text-[#FFFFFF] '>
      <section className='mx-[10%] grid grid-cols-[15%_50%_40%] items-center'>
        <div className='text-6xl'>
          <Image
            src={logo}
            width={300}
            height={300}
            alt='Picture of the author'
          />
        </div>

        <SearchBar />

        <div className='flex justify-center gap-[40px] '>
          <div className='relative group'>
            <div className='flex items-center gap-1 cursor-pointer'>
              <ProfileIcon color='white' size='22' />
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
            <CartIcon color='white' size='22' />
            <p className='leading-none'>
              <span className='block text-xs'>0</span>
              <span className='text-xs'>cart</span>
            </p>
          </div>
        </div>
      </section>
      <section className='mx-[10%] grid grid-cols-[30%_70%] items-center mt-4'>
        <div className='mb-4'>
          <AllCategories />
        </div>

        <div className='mb-4'>
          <MenuList />
        </div>
      </section>
    </div>
  );
};

export default TopHeader;
