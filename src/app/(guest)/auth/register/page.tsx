import Link from 'next/link'
import { Icons } from '@/components/element/icons'
import { UserRegisterForm } from '@/components/element/form-register'

export default function RegisterPage() {
	return (
		<>
			<div className='container relative h-screen md:flex md:flex-row lg:grid lg:max-w-full lg:grid-cols-2 lg:px-0'>
				<div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
					<div className='absolute inset-0 bg-zinc-900' />
					<div className='relative z-20 flex items-center text-lg font-medium gap-6'>
						<div className='flex flex-col w-12'>
							<Icons.logo_light color='#FFFFFF' />
						</div>
					</div>
				</div>
				<div className='lg:p-8 h-screen flex items-center justify-center'>
					<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
						<div className='flex flex-col items-center'>
							<Icons.logo className='h-16 w-16' />
						</div>
						<div className='flex flex-col space-y-2 text-center'>
							<h1 className='text-2xl font-semibold tracking-tight'>ĐĂNG KÍ TÀI KHOẢN NGAY</h1>
							<p className='text-sm text-muted-foreground'>
									Nhập thông tin của bạn dưới đây để tạo tài khoản.
							</p>
						</div>
						<UserRegisterForm />
						<div className='flex flex-col space-y-2 text-center'>
							<p className='text-sm text-muted-foreground'>
							Bạn đã có tài khoản rồi?{' '}
								<Link href='/auth/login' className='text-primary'>
									đăng nhập
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
