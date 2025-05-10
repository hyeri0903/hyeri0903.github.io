// components/Header.tsx
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
        <span className="font-sans text-2xl sm:text-2xl font-extrabold tracking-wide text-gray-900 dark:text-gray-100">
          HYERI JUNG
        </span>

        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-2 mr-2">
            {/* <li>
              <Link
                href="/"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Home
              </Link>
            </li> */}
            <li>
              <Link
                href="/#profile"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="text-lg">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#work-experience"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="text-lg">Work Experience</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                 <span className="text-lg">Project</span>
              </Link>
            </li>
            {/* <li>
              <Link
                href="/#publication"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Publication
              </Link>
            </li> */}
          </ul>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
