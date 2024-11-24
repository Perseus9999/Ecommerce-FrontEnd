import ProfileIcon from '@/icon/profileIcon';
import SearchBar from './SearchBar';
import CartIcon from '@/icon/cartIcon';
import AllCategories from './AllCategories';
import MenuList from './MenuList';

const TopHeader = () => {
  return (
    <div className='bg-[#191919] text-[#FFFFFF] '>
      <section className='mx-[10%] grid grid-cols-[15%_50%_40%] items-center'>
        <div className='text-6xl'>Logo</div>

        <SearchBar />

        <div className='flex justify-center gap-[40px]'>
          <div className='flex items-center gap-1'>
            <ProfileIcon color='white' size='22' />
            <p className='leading-none'>
              <span className='block text-xs'>welcome</span>
              <span className='text-xs'>Sign In/Register</span>
            </p>
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
      <section className='mx-[10%] grid grid-cols-[15%_50%_40%] items-center my-4'>
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
