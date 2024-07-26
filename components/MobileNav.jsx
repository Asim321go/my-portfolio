'use client'

import React from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
]

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[30px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between items-center mt-32 mb-28">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-3xl">
                Asim<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-5">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                className={`${link.path === pathName &&
                  'border-b-2 border-accent text-accent'
                  } hover:text-accent transition-all text-lg`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
