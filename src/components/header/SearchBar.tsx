import SearchIcon from '@/icon/searchIcon';

const SearchBar = () => {
  return (
    <>
      <div className='flex items-center justify-between border w-[100%] p-[4px] rounded-lg bg-[#FFFFFF]'>
        <div>
          <input
            type='text'
            placeholder='Search product here...'
            className='w-[90%] text-[14px] focus:outline-none focus:ring-0 focus:border-none text-black'
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
