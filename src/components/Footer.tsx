import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-6">
      <div className="container mx-auto text-center">
        {/* Logo and navigation */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/assets/images/Logo.svg"
            alt="Muhammad Zeeshan Khan Logo"
            width={300}
            height={300}
            className="mb-2 "
          />
          <nav className="flex space-x-4 text-gray-700">
            <Link href="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link href="#about" className="hover:text-gray-500">
              About Me
            </Link>
            <Link href="#services" className="hover:text-gray-500">
              Services
            </Link>
            <Link href="#projects" className="hover:text-gray-500">
              Projects
            </Link>
            <Link href="#testimonials" className="hover:text-gray-500">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-gray-500">
              Contact
            </Link>
          </nav>
        </div>

        {/* Social media links */}
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://intagram.com" aria-label="Twitter" className="text-gray-400 hover:text-white">
            <Image src='/assets/images/insta.jpeg' alt='' width={20} height={20}/>
          </Link>
          <Link href="https://linkedin.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
            <Image src='/assets/images/linkedin.jpeg' alt='' width={20} height={20}/>
          </Link>
          <Link href="https://whatsapp.com" aria-label="whatsapp" className="text-gray-400 hover:text-white">
            <Image src='/assets/images/whatsapp.jpeg' alt='' width={20} height={20}/>
          </Link>
          <Link href="https://github.com" aria-label="github" className="text-gray-400 hover:text-white">
            <Image src='/assets/images/github.jpeg' alt='' width={20} height={20}/>
          </Link>
        </div>

        {/* Copyright text */}
        <p className="text-gray-700">
          © 2023 <span className="text-[#04AF70]">Syeda Inshrah Khatoon</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer