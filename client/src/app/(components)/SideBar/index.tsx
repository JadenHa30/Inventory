'use client'

import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapse } from '@/app/state'
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}
type SidebarLinkProps = {
  href: string,
  icon: LucideIcon,
  label: string,
  isCollapse: boolean,
}
const SidebarLink = ({ href, icon: Icon, label, isCollapse }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center ${isCollapse ? 'justify-center py-4' : 'justify-start px-8 py-4'} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? 'bg-blue-200 text-white' : ''}`}>
        <Icon className='w-6 h-6 !text-gray-700' />
        <span className={`${isCollapse ? 'hidden' : 'block'} font-medium text-gray-700`}>
          {label}
        </span>
      </div>
    </Link>
  )
}

export const SideBar = (props: Props) => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapse(!isSidebarCollapsed));
  }
  const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md:w-16': 'w-72 md:w-64'} bg-red transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
  return (
    <div className={sidebarClassNames}>
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? 'px-5' : 'px-2'}`}>
            <div>Logo</div>
            <h1 className={`${isSidebarCollapsed ? 'hidden' : 'block'} font-extrabold text-2xl`}>DuongStock</h1>
            <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
              <Menu className='w-4 h-4'/>
            </button>
        </div>
        
        {/*LINKS*/}
        <div className='flex-grow mt-8'>
          <SidebarLink href='/dashboard' icon={Layout} label='Dashboard' isCollapse={isSidebarCollapsed} />
          <SidebarLink href='/inventory' icon={Archive} label='Inventory' isCollapse={isSidebarCollapsed} />
          <SidebarLink href='/products' icon={Clipboard} label='Products' isCollapse={isSidebarCollapsed} />
          <SidebarLink href='/users' icon={User} label='Users' isCollapse={isSidebarCollapsed} />
          <SidebarLink href='/settings' icon={SlidersHorizontal} label='Settings' isCollapse={isSidebarCollapsed} />
          <SidebarLink href='/expenses' icon={CircleDollarSign} label='Expenses' isCollapse={isSidebarCollapsed} />
        </div>

        {/*Footer*/}
        <div className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-center text-xs text-gray-500`}>
          <p className='text-center text-xs text-gray-500'>2025 Duong Ha</p>
        </div>
    </div>
  )
}