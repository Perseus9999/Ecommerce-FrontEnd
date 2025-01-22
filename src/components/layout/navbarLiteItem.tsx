import { useRouter } from 'next/router';
import { NavItem } from '@/types/type';
import { useState, useEffect } from 'react';

interface NavItemProps {
  item: NavItem[];
}

const NavbarListItem = ({ item }: NavItemProps) => {
  const router = useRouter();
  const [isDropdown, setIsDropdown] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 2160) {
        setVisibleCount(11);
      } else if (screenWidth >= 1955 && screenWidth <= 2159) {
        setVisibleCount(10);
      } else if (screenWidth >= 1838 && screenWidth <= 1954) {
        setVisibleCount(9);
      } else if (screenWidth >= 1628 && screenWidth <= 1837) {
        setVisibleCount(8);
      } else if (screenWidth >= 1461 && screenWidth <= 1627) {
        setVisibleCount(7);
      } else if (screenWidth >= 1240 && screenWidth <= 1460) {
        setVisibleCount(6);
      } else if (screenWidth >= 1024 && screenWidth <= 1239) {
        setVisibleCount(5);
      } else {
        setVisibleCount(11);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleItems = item.slice(0, visibleCount);
  const hiddenItems = item.slice(visibleCount);

  return (
    <div className='flex items-center gap-4 relative'>
      {visibleItems.map((navItem) => (
        <div
          key={navItem.id}
          onClick={() => router.push(navItem.route)}
          className='px-4 cursor-pointer '
        >
          <p className='text-[18px]'>{navItem.label}</p>
        </div>
      ))}

      {hiddenItems.length > 0 && (
        <div
          className='relative ml-auto'
          onMouseEnter={() => setIsDropdown(true)}
          onMouseLeave={() => setIsDropdown(false)}
        >
          <p className='text-[18px] cursor-pointer'>More</p>

          {isDropdown && (
            <div className='absolute top-full right-0 mt-1 w-48 bg-gray-200 shadow-lg rounded'>
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
