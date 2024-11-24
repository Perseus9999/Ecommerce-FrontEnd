import DownArrowIcon from '@/icon/downArrow';
import MenuIcon from '@/icon/menuIcon';

const AllCategories = () => {
  return (
    <>
      <div className='bg-[#535353] rounded-lg mr-2'>
        <div className='flex items-center  mx-4 p-2'>
          <MenuIcon color='white' size='18' />
          <p className='pl-4 pr-4'>All Categories</p>
          <DownArrowIcon color='white' size='18' />
        </div>
      </div>
    </>
  );
};

export default AllCategories;
