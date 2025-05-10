import Link from 'next/link';

export default function LeftSidebar() {
  return (
    <>
      {/* mobile: 사이드바 */}
      <div className="block fixed top-0 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center z-50">
        <h2 className="text-lg font-bold dark:text-white">Hyeri Jung</h2>
        <nav className="flex space-x-4">
          <Link href="https://github.com/" target="_blank" className="text-sm dark:text-gray-300 hover:underline">GitHub</Link>
          <Link href="https://yourblog.com" target="_blank" className="text-sm dark:text-gray-300 hover:underline">Blog</Link>
        </nav>
      </div>

      {/* desktop: 사이드바 */}
      <aside className="hidden md:flex w-64 h-screen bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 p-6 flex-col items-center fixed">
        <div className="mb-6 text-center">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold mt-4 dark:text-white">Hyeri Jung</h2>
        </div>

        {/* 메뉴 아이템 */}
        <div className="w-full px-4">
          <ul className="space-y-3">
            <li className="text-sm dark:text-gray-300 hover:underline cursor-pointer">아이템 1</li>
            <li className="text-sm dark:text-gray-300 hover:underline cursor-pointer">아이템 2</li>
            <li className="text-sm dark:text-gray-300 hover:underline cursor-pointer">아이템 3</li>
          </ul>
        </div>
      </aside>
    </>
  );
}
