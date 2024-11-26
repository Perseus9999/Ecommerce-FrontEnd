import SearchIcon from '@/icon/searchIcon';

const SearchBar = () => {
  return (
    <>
      <div className='mx-6 flex items-center justify-between border w-[100%] p-[4px] rounded-lg bg-[#FFFFFF]'>
        <div className='w-[100%]'>
          <input
            type='text'
            placeholder='Search product here...'
            className='w-[100%] focus:outline-none focus:ring-0 focus:border-none text-[14px]  text-black'
          />
        </div>
        <div className='bg-[#FD2A53] p-1 rounded-md'>
          <SearchIcon color='white' size='24' />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
