import { menuList } from '../../../data.json';

const MenuList = () => {
  return (
    <>
      <div className='ml-6'>
        <ul className='flex list-none gap-12'>
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
