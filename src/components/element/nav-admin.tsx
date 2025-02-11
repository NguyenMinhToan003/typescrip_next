'use client'

import { Icons } from '@/components/element/icons'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'

const MenuItems = [
  {
    title: 'Trang chủ',
    active: true,
    url: '/admin',
    icon: <Icons.home />,
  },
  {
    title:'Phim',
    active: false,
    url: '/admin/movies',
    icon: <Icons.movies />,
  },
  {
    title:'Danh mục',
    active: false,
    url: '/admin/categories',
    icon: <Icons.categories />,
  },
  {
    title: 'Người dùng',
    active: false,
    url: '/admin/users',
    icon: <Icons.wallet />,
  },
  {
    title: 'Cài đặt',
    active: false,
    url: '/admin/settings',
    icon: <Icons.settings />,
  },
  {
    title: 'Cá nhân',
    active: false,
    url: '/admin/profile',
    icon: <Icons.profile />,
  }
]

const NavAdmin = () => {
  const [active, setActive] = useState(MenuItems)
  const handleMenuClick = (item: any) => {
		const updatedItems = MenuItems.map((i) => {
			if (i.title === item.title) {
				i.active = true
			} else {
				i.active = false
			}
			return i
		})
		setActive(updatedItems)
	}
  return (<aside className='sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4'>
				<div className="flex items-center mb-4 space-x-1 min-w-3/5 max-w-3/5">
      <Link href='/'>
        <Icons.logo />
      </Link>
      </div>
        <nav className='space-y-2'>
					{MenuItems.map((item) => (
						<Link
              href={item.url}
							className={`w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-800 ${
								item.active ? 'bg-gray-200' : ''
							}`}
							key={item.title}
							onClick={() => handleMenuClick(item)}
						>
							{item.icon}
							<span className='text-sm font-medium'>{item.title}</span>
						</Link>
					))}
          <Button 
            variant={'destructive'} 
            className='w-full justify-start'
            onClick={() => signOut()}
          >
							<Icons.logout />
							<span className='text-sm font-medium'>Đăng xuất</span>
						</Button>
				</nav>
        </aside>)
}
export default NavAdmin