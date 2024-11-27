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

export function SignIn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='text-xl w-[100%] p-4 rounded-3xl '>Sign In</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-center text-3xl'>Sign In</DialogTitle>
          <DialogDescription className='text-center text-sm '>
            Your information is protected
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4 '>
            <Label htmlFor='username' className='text-right'>
              Email Adress
            </Label>
            <Input type='email' id='username' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4 '>
            <Label htmlFor='username' className='text-right'>
              Password
            </Label>
            <Input type='password' id='username' className='col-span-3' />
          </div>
        </div>
        <DialogFooter className='mx-auto'>
          <Button type='submit'>Sign In</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
