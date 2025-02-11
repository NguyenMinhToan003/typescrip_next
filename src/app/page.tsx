import { auth, signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default async function LoginPage() {
    const session = await auth()
	return (
		<>
		<form
      action={async () => {
        'use server'
        await signIn()
      }}
    >
        <Button variant={'secondary'} type="submit">Login</Button>
        <Link href='/admin'>Admin</Link>
      </form>
      <pre>{JSON.stringify(session,null,2)}</pre>
		</>
	)
}
