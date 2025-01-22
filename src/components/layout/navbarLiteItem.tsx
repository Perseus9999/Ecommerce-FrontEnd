import { useRouter } from 'next/router';
import { NavItem } from '@/types/type';
import { useState } from 'react';

interface NavItemProps {
  item: NavItem[];
}

const NavbarListItem = ({ item }: NavItemProps) => {
  const router = useRouter();
  const [isDropdown, setIsDropdown] = useState(false);

  const visibleItems = item.slice(0, 10);
  const hiddenItems = item.slice(10);

  return (
    <div className=' flex items-center gap-4 relative'>
      {visibleItems.map((navItem) => (
        <div
          key={navItem.id}
          onClick={() => router.push(navItem.route)}
          className='px-4 cursor-pointer'
        >
          <p className='text-[18px]'>{navItem.label}</p>
        </div>
      ))}

      {hiddenItems.length > 0 && (
        <div
          className='relative'
          onMouseEnter={() => setIsDropdown(true)}
          onMouseLeave={() => setIsDropdown(false)}
        >
          <p className='text-[18px] cursor-pointer'>More</p>

          {isDropdown && (
            <div className='absolute top-full right-0 mt-1  w-48 bg-gray-200  shadow-lg rounded'>
              {hiddenItems.map((navItem) => (
                <div
                  key={navItem.id}
                  onClick={() => router.push(navItem.route)}
                  className='px-4 py-2 cursor-pointer hover:bg-zinc-400'
                >
                  <p className='text-[16px]'>{navItem.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarListItem;
