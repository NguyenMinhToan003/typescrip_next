import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
	return (
		<>
		<form
      action={async () => {
        'use server'
        await signIn()
      }}
    >
      <Button variant={'secondary'} type="submit">Login</Button>
    </form>
		</>
	)
}
