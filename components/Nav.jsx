'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

const Nav = () => {
  const pathName = usePathname()
  console.log('pathName========', pathName)
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link?.path}
            className={`${
              link.path === pathName && 'border-b-2 border-accent text-accent'
            } hover:text-accent transition-all capitalize text-sm`}
            key={index}
          >
            {link?.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
