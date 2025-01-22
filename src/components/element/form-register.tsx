'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/element/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster, toast } from 'sonner';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserRegisterForm({ className, ...props }: UserAuthFormProps) {
	const router = useRouter();

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
  const [rePassword, setRePassword] = React.useState<string>('');
  const checkPassword = (password: string, rePassword: string) => {
    if(password === rePassword){
      return true;
    }
    toast.error('mật khẩu không khớp');
    return false;
  }
	const checkLength = (password: string) => {
		if(password.length < 6){
			toast.error('mật khẩu phải có ít nhất 6 ký tự');
			return false;
		}
		return true;
	}
  const checkList =(name: string, email: string, password: string, rePassword: string) => {
    if(!checkPassword(password, rePassword)){
      return false;
    }
		if(!checkLength(password)){
			return false;
		}
    if(name==='' && email==='' && password==='' && rePassword===''){
      toast.error('hãy điền đầy đủ thông tin')
      return false;
    }
    return true;
  }
	const onSubmit=async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true)
    if(checkList(name, email, password, rePassword)){
      toast.success('đăng ký thành công');
    }
    setIsLoading(false)
	}

	return (
		<>
			<Toaster richColors/>
			<div className={cn('grid gap-6', className)} {...props}>
				<form onSubmit={onSubmit}>
					<div className='grid gap-2'>
						<div className='grid gap-2'>
							<Label  htmlFor='email'>
								Email
							</Label>
							<Input
								id='email'
								type='email'
								autoComplete='email'
								disabled={isLoading}
								required
								onChange={(e) => setEmail(e.target.value)}
							/>
              <Label  htmlFor='name'>
								Username
							</Label>
							<Input
								id='name'
								type='text'
								autoComplete='name'
								disabled={isLoading}
								required
								onChange={(e) => setName(e.target.value)}
							/>
							<Label htmlFor='email'>
								Mật khẩu
							</Label>
							<Input
								id='password'
								type='password'
								autoComplete='password'
								disabled={isLoading}
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
              <Label  htmlFor='re-password'>
								Nhập lại mật khẩu
              </Label>
              <Input
                id='re-password'
                type='password'
                autoCorrect='off'
                disabled={isLoading}
                required
                onChange={(e) => setRePassword(e.target.value)}
              />
						</div>
						<Button disabled={isLoading}>
							{isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
							Đăng Kí
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
