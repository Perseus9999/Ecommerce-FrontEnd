import Link from 'next/link';

const MenuList = ({ item }: any) => {
  return (
    <div className='mx-2 '>
      <ul>
        <li className='text-[16px] p-1'>
          <Link href={item.route}>{item.label}</Link>
        </li>
      </ul>
    </div>
  );
};
export default MenuList;
