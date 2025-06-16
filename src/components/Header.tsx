'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const getImagePath = (filename: string) =>
  process.env.NODE_ENV === 'production'
    ? `/LumexWeb/images/${filename}`
    : `/images/${filename}`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'LUMEX 회사 개요', href: '/company' },
    { name: '사업분야 및 경쟁력', href: '/business' },
    { name: '보유 기술력 및 솔루션', href: '/technology' },
    { name: 'TURNKEY PROJECT EXECUTION', href: '/turnkey' },
    { name: '공급가능 설비 및 시스템', href: '/equipment' },
    { name: 'Development Strategy', href: '/strategy' }
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex items-center h-20">
          <div className="flex-shrink-0 w-[180px] mr-6 -mt-[10px] flex items-center gap-2">
            <Link href="/" className="block">
              <img
                src={getImagePath('lumex_logo.png')}
                alt="LUMEX Logo"
                className="h-[45px] w-auto"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <img
              src={getImagePath('lumex_log_2.png')}
              alt="LUMEX Logo 2"
              className="h-[32px] w-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-end space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-bold whitespace-nowrap text-gray-700 hover:text-blue-600 py-8 px-2 ${
                  pathname === item.href ? 'text-blue-600 border-b-2 border-blue-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 px-4 text-sm font-bold ${
                  pathname === item.href
                    ? 'text-blue-600 bg-gray-50'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 