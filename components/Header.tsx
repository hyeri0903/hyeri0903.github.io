'use client'
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-sans text-2xl sm:text-2xl font-extrabold tracking-wide text-gray-900 dark:text-gray-100">
            HYERI JUNG
          </span>
        </div>
        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              <Link
                href="/"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:text-gray-500 transition-colors"
              >
                <span className="text-lg">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#profile"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:text-gray-500  transition-colors"
              >
                <span className="text-lg">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#work-experience"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:text-gray-500  transition-colors"
              >
                <span className="text-lg">Experience</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md transition-colors"
              >
                <span className="text-lg">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md transition-colors"
              >
                <span className="text-lg">Contact</span>
              </Link>
            </li>
          </ul>
          <ThemeSwitch />
        </nav>
        {/* 모바일 햄버거 메뉴 */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-white focus:outline-none"
            aria-label="Open menu"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>
      {/* 모바일 메뉴 오버레이 */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-full bg-white dark:bg-neutral-800 shadow-lg p-6 flex flex-col space-y-6" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-gray-800 dark:text-white mb-4"
              aria-label="Close menu"
            >
              <HiX size={28} />
            </button>
            <Link href="/" className="text-lg text-gray-800 dark:text-white" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/#profile" className="text-lg text-gray-800 dark:text-white" onClick={() => setMenuOpen(false)}>
              Profile
            </Link>
            <Link href="/#work-experience" className="text-lg text-gray-800 dark:text-white" onClick={() => setMenuOpen(false)}>
              Experience
            </Link>
            <Link href="/#projects" className="text-lg text-gray-800 dark:text-white" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/#contact" className="text-lg text-gray-800 dark:text-white" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200 dark:border-white">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
