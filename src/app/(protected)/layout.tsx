import AdminDashboard from '@/components/element/admin-header'
import NavAdmin from '@/components/element/nav-admin'

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
  return (
    
      <div className='flex'>		
        <NavAdmin/>
        <main className='flex-grow'>
          <AdminDashboard/>
          <div className='flex-grow p-6'>
            {children}
          </div>
        </main>
    </div>
   
  )
}