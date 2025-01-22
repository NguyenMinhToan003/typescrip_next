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

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
	const router = useRouter();

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [email, setEmail] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');

	const checkList = (email: string, password: string) => {
		if (email === '' && password === '') {
			toast.error('hãy điền đầy đủ thông tin');
			return false;
		}
		return true;
	}
	const onSubmit= async(event: React.SyntheticEvent)=> {
		event.preventDefault();
		setIsLoading(true);

	}

	return (
		<>
			<Toaster richColors/>
			<div className={cn('grid gap-6', className)} {...props}>
				<form onSubmit={onSubmit}>
					<div className='grid gap-2'>
						<div className='grid gap-1'>
							<Label className='sr-only' htmlFor='email'>
								Email
							</Label>
							<Input
								id='email'
								placeholder='name@example.com'
								type='email'
								autoCapitalize='none'
								autoComplete='email'
								autoCorrect='off'
								disabled={isLoading}
								required
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Label className='sr-only' htmlFor='email'>
								Password
							</Label>
							<Input
								id='password'
								placeholder='********'
								type='password'
								autoCapitalize='none'
								autoComplete='password'
								autoCorrect='off'
								disabled={isLoading}
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<Button disabled={isLoading}>
							{isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
							Đăng Nhập
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
