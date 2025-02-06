'use client'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/element/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast, Toaster } from 'sonner'
import { authenticate } from '@/utils/actions'
import { useState, HTMLAttributes } from 'react'
import { useRouter } from 'next/navigation'


interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
	const {push} = useRouter()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const checkLength = (password: string) => {
		if(password.length < 6){
			toast.error('mật khẩu phải có ít nhất 6 ký tự')
			return false
		}
		return true
	}
	const isPassCheckList = (email: string, password: string) => {
		if(!checkLength(password)){
			return false
		}
		if (email === '' && password === '') {
			toast.error('hãy điền đầy đủ thông tin')
			return false
		}
		return true                
	}
	const onSubmit = async(e: React.FormEvent)=> {
		e.preventDefault();
		setIsLoading(true)
		const isActive = isPassCheckList(email, password)
		if(isActive){
			const response = await authenticate(email, password)
			if((response as any)?.error){
				toast.error(response?.code)
				if(response?.name === 'InvalidActiveAccountError'){
					push('/auth/active-account')
				}
			}
			else {
				toast.success('Đăng nhập thành công')
				push('/admin')
			}
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
							{isLoading===true && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
							Đăng Nhập
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}
