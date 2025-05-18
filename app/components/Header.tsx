"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import HeaderLogo from './HeaderLogo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const dropdownMenus = document.querySelectorAll('.dropdown-menu-container');
      const dropdownButtons = document.querySelectorAll('.dropdown-button');
      let clickedInsideDropdown = false;

      dropdownButtons.forEach(button => {
        if (button.contains(event.target as Node)) {
          clickedInsideDropdown = true;
        }
      });

      dropdownMenus.forEach(menu => {
        if (menu.contains(event.target as Node)) {
          clickedInsideDropdown = true;
        }
      });

      if (!clickedInsideDropdown) {
        setOpenDropdowns({});
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click was inside the mobile menu
      const mobileMenu = document.querySelector('.mobile-menu-container');
      if (mobileMenu && !mobileMenu.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setOpenDropdowns({});
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle mobile menu toggle
  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenDropdowns({}) // Close any open dropdowns when toggling mobile menu
  }

  // Handle dropdown toggle
  const toggleDropdown = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation()
    setOpenDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Sectors', 
      href: '/sectors',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Transport Sector', href: '/sectors/transport' },
        { name: 'Aviation Sector', href: '/sectors/aviation' },
        { name: 'Banking & Finance', href: '/sectors/banking-finance' },
        { name: 'Industrial Sector', href: '/sectors/industrial' },
        { name: 'Restaurants Sector', href: '/sectors/restaurants' },
        { name: 'Retail Sector', href: '/sectors/retail' }
      ]
    },
    { 
      name: 'Blog', 
      href: '/blog',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Transport Sector', href: '/blog/transport' },
        { name: 'Aviation Sector', href: '/blog/aviation' },
        { name: 'Banking & Finance', href: '/blog/banking-finance' },
        { name: 'Industrial Sector', href: '/blog/industrial' },
        { name: 'Restaurants Sector', href: '/blog/restaurants' },
        { name: 'Retail Sector', href: '/blog/retail' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <HeaderLogo />
              <span className="font-bold text-xl text-primary hidden sm:inline-block ml-2">Saudi Uniform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <button 
                      className={`dropdown-button flex items-center font-medium ${
                        pathname.includes(link.href) ? 'text-primary' : 'text-gray-800 hover:text-primary'
                      }`}
                      onClick={(e) => toggleDropdown(e, link.name)}
                      aria-expanded={openDropdowns[link.name] || false}
                    >
                      {link.name}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 ml-1 transition-transform ${openDropdowns[link.name] ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    <div 
                      className={`dropdown-menu-container absolute top-full left-0 mt-1 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all duration-300 transform origin-top-left
                      ${
                        openDropdowns[link.name] 
                          ? 'opacity-100 visible' 
                          : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                      }`}
                    >
                      <div className="py-1">
                        <Link
                          href={link.href}
                          className={`block px-4 py-2 text-sm font-semibold ${
                            pathname === link.href ? 'text-primary bg-gray-50' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                          }`}
                        >
                          All {link.name}
                        </Link>
                        <div className="border-t border-gray-100 my-1"></div>
                        {link.dropdownItems?.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className={`block px-4 py-2 text-sm ${
                              pathname === item.href ? 'text-primary bg-gray-50' : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-medium ${
                      pathname === link.href ? 'text-primary' : 'text-gray-800 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open menu</span>
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 lg:hidden mobile-menu-container`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full pt-20 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.hasDropdown ? (
                  <div>
                    <button 
                      onClick={(e) => toggleDropdown(e, link.name)}
                      className={`dropdown-button flex items-center justify-between w-full py-2 font-medium ${
                        pathname.includes(link.href) ? 'text-primary' : 'text-gray-800'
                      }`}
                      aria-expanded={openDropdowns[link.name] || false}
                    >
                      {link.name}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 ml-1 transition-transform ${openDropdowns[link.name] ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Mobile Dropdown */}
                    <div 
                      className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                        openDropdowns[link.name] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <Link
                        href={link.href}
                        className={`block py-2 text-sm font-semibold ${
                          pathname === link.href ? 'text-primary' : 'text-gray-700'
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdowns({});
                        }}
                      >
                        All {link.name}
                      </Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      {link.dropdownItems?.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className={`block py-2 text-sm ${
                            pathname === item.href ? 'text-primary' : 'text-gray-700'
                          }`}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenDropdowns({});
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block py-2 font-medium ${
                      pathname === link.href ? 'text-primary' : 'text-gray-800'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto p-4 border-t">
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded block text-center w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}