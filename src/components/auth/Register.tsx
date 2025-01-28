import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FacebookIcon from '../icon/facebookIcon';
import GoogleIcon from '../icon/googleIcone';
import AppleIcon from '../icon/appleIcon';

export function Register() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className='text-center text-[14px] mt-1 cursor-pointer'>Register</p>
      </DialogTrigger>
      <DialogContent className='sm:w-[350px] lg:w-[400px] xl:w-[450px] bg-white'>
        <DialogHeader>
          <DialogTitle className='text-center'>Register/Sign in</DialogTitle>
          <DialogDescription className='text-[12px] text-center'>
            Your information is protected
          </DialogDescription>
        </DialogHeader>
        <div className=' '>
          <form>
            <section className='mb-2'>
              <div>
                <Label htmlFor='name'>Username</Label>
              </div>
              <div>
                <Input id='name' type='text' placeholder='enter username' />
              </div>
            </section>
            <section className='mb-2'>
              <div>
                <Label htmlFor='email'>Email Adress</Label>
              </div>
              <div>
                <Input id='email' type='email' placeholder='xyz@gmail.com' />
              </div>
            </section>
            <section className='mb-2'>
              <div>
                <Label htmlFor='password'>Password</Label>
              </div>
              <div>
                <Input id='password' type='password' />
              </div>
            </section>
            <div className='mt-4'>
              <Button
                variant='outline'
                type='submit'
                className='w-full bg-black text-white hover:bg-black hover:text-white '
              >
                Register
              </Button>
            </div>
          </form>
        </div>

        <div className='flex items-center justify-center my-4'>
          <div className='flex-grow border-t border-gray-300'></div>
          <span className='mx-4 text-gray-500 text-sm'>Or continue with</span>
          <div className='flex-grow border-t border-gray-300'></div>
        </div>

        <div className='flex items-center gap-8 justify-center mb-4'>
          <div>
            <FacebookIcon size={44} color='#4267B2' />
          </div>
          <div>
            <GoogleIcon size={40} />
          </div>
          <div>
            <AppleIcon size={48} color='black' />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
