import RightArrowIcon from '@/icon/rightArrowIcone';
import HeroProduct from './heroProduct';

const Hero = () => {
  return (
    <div className='bg-[#ff2651]'>
      <div className=' mx-[10%] flex items-center gap-20'>
        <section className='py-8'>
          <div className='text-xl text-[#FFFFFF] mb-4 '>
            Sales Ends: Dec 4, 13:59 (GMT+6)
          </div>

          <div className='mb-2'>
            <span className='text-5xl text-[#FFFFFF] font-extrabold'>
              TOP YEAR-
            </span>

            <div className='flex items-center gap-6'>
              <span className='text-5xl text-[#FFFFFF] font-extrabold'>
                END DISCOUNTS
              </span>
              <RightArrowIcon
                color='#ff2651'
                size='28'
                className='bg-[#FFFFFF] p-1 rounded-full'
              />
            </div>
          </div>
          <div>
            <span className='text-7xl block font-extrabold'>BLACK</span>{' '}
            <span className='text-7xl text-[#ff71c4] font-extrabold'>
              FRIDAY
            </span>
          </div>
        </section>
        <section>
          <HeroProduct />
        </section>
      </div>
    </div>
  );
};

export default Hero;
