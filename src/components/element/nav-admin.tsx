'use client'

import { Icons } from '@/components/element/icons'
import Link from 'next/link'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { signOut } from '@/auth'

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
				<div className='flex items-center mb-4 space-x-1 min-w-3/5 max-w-3/5'>
					<Icons.logo/>
          <Avatar className="w-7 h-7">
              <AvatarImage
                src="https://yt3.ggpht.com/mKlZ7TlYPI2iivAuS5T1a2xfjPU_0kfSSmQG7b35Kg2F5XmEG35WLFYjz_-CPGHo1X_hkEMHSQ=s88-c-k-c0x00ffffff-no-rj"
                alt="User Avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
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