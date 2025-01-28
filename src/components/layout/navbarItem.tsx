import { useState, useEffect } from 'react';
import { NavItem } from '@/types/type';
import FireIcon from '../icon/fireIcon';
import DownArrowIcon from '../icon/downArrowIcone';

interface NavItemProps {
  items: NavItem[];
}

const NavbarItem = ({ items }: NavItemProps) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(3);

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const updateVisibleItemsCount = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1620) setVisibleItemsCount(8);
    else if (screenWidth >= 1490) setVisibleItemsCount(7);
    else if (screenWidth >= 1360) setVisibleItemsCount(6);
    else if (screenWidth >= 1230) setVisibleItemsCount(5);
    else if (screenWidth >= 1100) setVisibleItemsCount(4);
    else setVisibleItemsCount(3);
  };

  useEffect(() => {
    updateVisibleItemsCount();
    window.addEventListener('resize', updateVisibleItemsCount);

    return () => {
      window.removeEventListener('resize', updateVisibleItemsCount);
    };
  }, []);

  const visibleItems = items.slice(0, visibleItemsCount);
  const dropdownItems = items.slice(visibleItemsCount);

  return (
    <div className='flex justify-between gap-8 lg:gap-0'>
      {/* Super Deal Section */}
      <div className='flex items-center w-[120px] cursor-pointer hover:text-red-900'>
        <FireIcon color='green' size={24} />
        <span className='font-medium'>Super Deal</span>
      </div>

      {/* Visible Items */}
      {visibleItems.map((item) => (
        <div key={item.id} className=' w-[120px] text-center'>
          <ul className='m-0 p-0 text-[18px]'>
            <li className='hover:text-green-500 font-medium border-b-2 border-transparent hover:border-green-500 cursor-pointer'>
              {item.label}
            </li>
          </ul>
        </div>
      ))}

      {/* Dropdown for Remaining Items */}
      <div
        className='flex items-center justify-center gap-[-3px] w-[120px] cursor-pointer relative'
        onClick={handleDropdown}
      >
        <span className='font-medium text-[18px]'>More</span>
        <DownArrowIcon color='black' size={18} />

        {isDropdown && (
          <div className='absolute top-full right-0 bg-white shadow-lg border border-gray-300 w-[200px] p-2 z-50 '>
            {dropdownItems.length > 0 ? (
              dropdownItems.map((item) => (
                <div
                  key={item.id}
                  className='hover:bg-gray-200 p-2 rounded cursor-pointer'
                >
                  {item.label}
                </div>
              ))
            ) : (
              <div className='text-gray-500 text-center'>No item available</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarItem;
