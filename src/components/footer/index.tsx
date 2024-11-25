import FacebookIcon from '@/icon/facebookIcon';
import InstagramIcon from '@/icon/instragamIcon';
import TwitterIcon from '@/icon/twiterIcon';
import WhatsAppIcon from '@/icon/whatsAppIcon';

const Footer = () => {
  return (
    <div className='bg-[#e8e8e8] py-6'>
      <div className='mx-[10%] grid grid-cols-3 gap-6'>
        <section>
          <h2 className='text-[18px] font-bold'>Customer Service</h2>
          <ul className='mt-2'>
            <li className='footerlist'>Help Center</li>
            <li className='footerlist'>Transaction Service Agreement</li>
            <li className='footerlist'>Foreign Customers</li>
            <li className='footerlist'>Take our feedback survey</li>
          </ul>
        </section>

        <section>
          <h2 className='text-[18px] font-bold'>Stay connected</h2>
          <ul className='mt-2 flex items-center gap-[10px]'>
            <FacebookIcon color='#929292' size='24' />
            <InstagramIcon color='#929292' size='24' />
            <WhatsAppIcon color='#929292' size='24' />
            <TwitterIcon color='#929292' size='24' />
          </ul>
        </section>

        <section>
          <h2 className='text-[18px] font-bold'>Collaboration with us</h2>
          <ul className='mt-2'>
            <li className='footerlist'>Partnerships</li>
            <li className='footerlist'>Seller Log In</li>
          </ul>
        </section>

        <section className='col-span-2'>
          <h2 className='text-[18px] font-bold'>Help</h2>
          <p className='footerlist mt-2'>
            Help Center, Disputes & Reports, Buyer Protection, Report IPR
            infringement, Regulated Information, Integrity Compliance,
            Transparency Center, Submit report (non-registered users)
          </p>
        </section>

        <section>
          <h2 className='text-[18px] font-bold'>EcoHub Groups</h2>
          <p className='mt-2 footerlist'>EcoHuub Group Website, EcoHuub.</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
