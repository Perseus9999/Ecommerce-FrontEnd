import { useRouter } from 'next/navigation';
import { menuItems } from '../../../data/index';
import { useState } from 'react';
const NavbarListMenu = () => {
  const router = useRouter();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const visibleItems = menuItems.slice(0, 12);
  const dropdownItems = menuItems.slice(12);
  return (
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
  );
};
export default NavbarListMenu;
