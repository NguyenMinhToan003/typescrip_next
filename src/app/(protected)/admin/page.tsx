'use client'
import { Icons } from "@/components/element/icons"
import Link from "next/link";
import { useState } from "react";

const MenuItems = [
  {
    title: 'Home',
    active: true,
    url: '/admin',
    icon: <Icons.home />,
  },
  {
    title:'Movies',
    active: false,
    url: '/admin/movies',
    icon: <Icons.movies />,
  },
  {
    title:'Catagories',
    active: false,
    url: '/admin/categories',
    icon: <Icons.categories />,
  },
  {
    title: 'Users',
    active: false,
    url: '/admin/users',
    icon: <Icons.wallet />,
  },
  {
    title: 'Settings',
    active: false,
    url: '/admin/settings',
    icon: <Icons.settings />,
  },
  {
    title: 'Profile',
    active: false,
    url: '/admin/profile',
    icon: <Icons.profile />,
  },
  {
    title: 'Logout',
    active: false,
    url: '/auth/logout',
    icon: <Icons.logout />,
  },
];

const UsersPage = () => {
  

  return <>
    Dashboard
  </>
}
export default UsersPage