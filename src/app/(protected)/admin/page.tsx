import { auth } from "@/auth"

 
export default async function UserAvatar() {
  const session = await auth()
  if (!session?.user) return null
  return (
    <div>
     <pre>{JSON.stringify(session.user, null, 2)}</pre>
     <p>{session.access_expire}</p>
    </div>
  )
}