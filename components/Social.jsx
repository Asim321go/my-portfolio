'use client'

import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const socialIcons = [
  { icon: FaGithub, path: '' },
  { icon: FaLinkedin, path: '' },
  { icon: FaTwitter, path: '' },
  { icon: FaInstagram, path: '' },
]

const Social = () => {
  return (
    <div className="flex gap-6 justify-between items-center">
      {socialIcons.map((social, index) => (
        <Link
          key={index}ß
          href={social.path}
          className="w-9 h-9 border-[1px] border-accent flex justify-center items-center rounded-full transition-colors duration-500  hover:bg-accent group"
        >
          <social.icon className="text-accent group-hover:text-black " size={15} />
        </Link>
      ))}
    </div>
  )
}

export default Social
