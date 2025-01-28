import { useState, useEffect } from 'react';
import { NavItem } from '@/types/type';
import { Button } from '../ui/button';
interface NavItemProps {
  items: NavItem[];
}

const NavbarItem = ({ items }: NavItemProps) => {
  // const [visibleItems, setVisibleItems] = useState<NavItem[]>([]);
  // const [hiddenItems, setHiddenItems] = useState<NavItem[]>([]);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const handleDropDown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // useEffect(() => {
  //   const updateItems = () => {
  //     const screenWidth = window.innerWidth;
  //     let visibleCount = 0;
  //     if (screenWidth > 2400) visibleCount = 15;
  //     else if (screenWidth > 2300) visibleCount = 14;
  //     else if (screenWidth > 2200) visibleCount = 14;
  //     else if (screenWidth > 2100) visibleCount = 12;
  //     else if (screenWidth > 2000) visibleCount = 11;
  //     else if (screenWidth > 1800) visibleCount = 10;
  //     else if (screenWidth > 1600) visibleCount = 9;
  //     else if (screenWidth > 1360) visibleCount = 7;
  //     else if (screenWidth > 1200) visibleCount = 6;
  //     else if (screenWidth > 1140) visibleCount = 5;
  //     else visibleCount = 5;

  //     setVisibleItems(items.slice(0, visibleCount));
  //     setHiddenItems(items.slice(visibleCount));
  //   };

  //   updateItems();

  //   window.addEventListener('resize', updateItems);
  //   return () => {
  //     window.removeEventListener('resize', updateItems);
  //   };
  // }, [items]);

  return (
    // <div className=' flex items-center justify-between'>
    //   <div className='flex items-center gap-8'>
    //     {visibleItems.map((item: NavItem) => (
    //       <div key={item.id}>
    //         <ul className='m-0 p-0'>
    //           <li className='text-[18px] cursor-default'>{item.label}</li>
    //         </ul>
    //       </div>
    //     ))}
    //   </div>

    //   {hiddenItems.length > 0 && (
    //     <div className='relative'>
    //       <Button
    //         className='text-[18px] font-semibold ml-4'
    //         onClick={handleDropDown}
    //       >
    //         More...
    //       </Button>

    //       {isDropdownOpen && (
    //         <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-md rounded-lg'>
    //           {hiddenItems.map((item: NavItem) => (
    //             <div key={item.id} className='p-2 hover:bg-gray-100'>
    //               <a href={item.route} className='text-black text-sm'>
    //                 {item.label}
    //               </a>
    //             </div>
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </div>
    <>jfksd</>
  );
};

export default NavbarItem;
