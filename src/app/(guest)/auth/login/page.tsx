import Link from 'next/link';

import { ModeToggle } from '@/components/element/theme-selector';
import { Icons } from '@/components/element/icons';
import { UserLoginForm } from '@/components/element/form-login';

export default function LoginPage() {
	return (
		<>
			<div className='container relative h-screen md:flex md:flex-row lg:grid lg:max-w-full lg:grid-cols-2 lg:px-0'>
				<div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
					<div className='absolute inset-0 bg-zinc-900' />
					<div className='relative z-20 flex items-center text-lg font-medium gap-6'>
						<ModeToggle />
						<div className='flex flex-col w-12'>
							<Icons.logo_light color='#FFFFFF' />
						</div>
					</div>
					<div className='relative z-20 mt-auto'>
						<blockquote className='space-y-2'>
							<footer className='text-sm'>
								<p>This is a starter template for a static website using:</p>
								<ul className='list-disc list-inside'>
									
								</ul>
							</footer>
						</blockquote>
					</div>
				</div>
				<div className='lg:p-8 h-screen flex items-center justify-center'>
					<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
						<div className='flex flex-col items-center'>
							<Icons.logo className='h-16 w-16' />
						</div>
						<div className='flex flex-col space-y-2 text-center'>
							<h1 className='text-2xl font-semibold tracking-tight'>ĐĂNG NHẬP</h1>
							<p className='text-sm text-muted-foreground'>
							Nhập thông tin đăng nhập của bạn dưới đây để truy cập.
							</p>
						</div>
						<UserLoginForm/>
						<div className='flex flex-col space-y-2 text-center'>
							<p className='text-sm text-muted-foreground'>
							Bạn chưa có tài khoản?{' '}
								<Link href='/auth/register' className='text-primary'>
									đăng kí ngay
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
