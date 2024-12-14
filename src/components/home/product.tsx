import CartIcon from '@/icon/cartIcon';
import data from '@/json/product.json';
import Link from 'next/link';
import Image from 'next/image';

const Product = () => {
  const products = data.products;

  return (
    <div className='mx-[10%] my-6 '>
      <div className='grid grid-cols-6 gap-4'>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <div className='relative group'>
              <div
                key={product.id}
                className='border p-3 rounded-xl '
                style={{ border: `1px solid black` }}
              >
                <div className='relative '>
                  <Image
                    src={product.image[0]}
                    width={500}
                    height={500}
                    alt={product.title}
                    className=' h-[220px] w-[100%]  object-cover'
                  />
                  <div className='absolute bottom-2 right-2 bg-white  bg-opacity-70 text-white p-2 rounded-full cursor-pointer hover:bg-gray-500'>
                    <CartIcon color='black' size='24' />
                  </div>
                </div>
                <div className='text-md line-clamp-1'>{product.title}</div>
                <div>{product.rating}</div>
                <div>
                  <span className='font-medium'>BDT</span>
                  <span className='font-bold text-2xl'>{product.price}</span>
                </div>
                <div className='hidden group-hover:block'>
                  <div className='flex items-center justify-between mx-1'>
                    <div>
                      <Link href={`/product/${product.id}`}>
                        <button className='bg-black text-[white] p-1 rounded-lg'>
                          See preview
                        </button>
                      </Link>
                    </div>
                    <div>
                      <button className='bg-black text-[white] p-1 rounded-lg'>
                        Similar items
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
