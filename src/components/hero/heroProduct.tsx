import { heroSlider } from '@/json/data.json';
import Image from 'next/image';

const HeroProduct = () => {
  console.log(`📌 ~ heroSlider:`, heroSlider);

  return (
    <div className='flex items-center gap-[30px] '>
      {heroSlider.length > 0 &&
        heroSlider.map((product) => (
          <div
            key={product.id}
            className=' w-64 h-90 bg-[#d1f4c6] rounded-lg border-t-4 border-green-500'
          >
            <div className='m-4 '>
              <h3 className='text-[24px] font-extrabold text-[#376e25] h-[75px]'>
                {product.category}
              </h3>
              {product.product &&
                product.product.length > 0 &&
                product.product.map((items, index) => (
                  <div key={index} className='flex  mb-2 bg-[#FFFFFF] '>
                    <div className='p-1'>
                      <Image
                        src={items.image}
                        width={100}
                        height={100}
                        alt='Picture of the author'
                        className='h-[100px] w-[90px]'
                      />
                    </div>
                    <div>
                      <h3 className='text-[#d3031c] text-center text-[25px] py-2'>
                        {items.discountPrice}
                      </h3>{' '}
                      <h5 className='text-[#979797] text-center text-xl line-through'>
                        {items.regularPrice}
                      </h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default HeroProduct;
