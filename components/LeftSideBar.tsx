import Link from 'next/link';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";

export default function LeftSidebar() {
  return (
    <>
      {/* mobile: 사이드바 */}
      {/* <div className="block md:hidden fixed bg-white dark:bg-black justify-between items-center ">
        <h2 className="text-lg font-bold dark:text-white">Hyeri Jung</h2>
        <nav className="flex space-x-4">
          <Link href="https://github.com/" target="_blank" className="text-sm dark:text-gray-300 hover:underline">GitHub</Link>
          <Link href="https://yourblog.com" target="_blank" className="text-sm dark:text-gray-300 hover:underline">Blog</Link>
        </nav>
      </div> */}

      {/* desktop: 사이드바 */}
      <aside className="hidden md:flex w-64 h-screen bg-pink-300 dark:bg-black p-3 flex-col fixed">
        <div className="mb-3 text-left">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-md font-bold mt-4 dark:text-white">
            About me
          </h2>
          <div className="w-full h-[1px] bg-black dark:bg-white mt-2"></div>
        </div>
        <div className="w-full">
          <ul>
            <li className="text-sm dark:text-gray-300">
              <span className="font-bold">2023.06 - Present </span>
              <p className="text-sm">
                Backend Developer <br/>
                in NAVER Cloud, Republic of Korea
              </p>
            </li>
             <li className="text-sm dark:text-gray-300 mt-3">
             <span className="font-bold">2016.02 - 2020.02</span>
              <p className="text-sm">
                B.S in Computer Science <br/>
                Kookmin University, Republic of Korea
              </p>
            </li>
          </ul>
        </div>

        {/* 메뉴 아이템 */}
        <div className="w-full mt-7">
          <ul className="space-y-3">
            <li className="text-sm dark:text-gray-300">
              <div className="flex items-center">
                <FaLocationDot className="w-4 h-4"/>
                <span className="ml-1">Republic of Korea</span>
              </div>
            </li>
            <li className="text-sm dark:text-gray-300">
              <div className="flex items-center">
                <MdEmail className="w-4 h-4"/>
                <span className="ml-1">hyerijung0903@gmail.com</span>
              </div>
            </li>
            <li className="text-sm dark:text-gray-300 hover:underline cursor-pointer">
              <div className="flex items-center">
                <BsLinkedin />
                <a href="https://www.linkedin.com/in/hyerijung/" target="_blank" rel="noopener noreferrer">
                  <span className="ml-1">LinkedIn</span>
                </a>
              </div>
            </li>
            <li className="text-sm dark:text-gray-300 hover:underline cursor-pointer">
              <div className="flex items-center">
                <FaGithub />
                <a href="https://github.com/hyeri0903" target="_blank" rel="noopener noreferrer">
                  <span className="ml-1">GitHub</span>
                </a>
              </div>
             
            </li>
            <li className="text-sm dark:text-gray-300 hover:underline cursor-pointer">
              <div className="flex items-center">
                <SiTistory className="w-3 h-3"/>
                <a href="https://hyeri0903.tistory.com/" target="_blank" rel="noopener noreferrer">
                  <span className="ml-1">Tech Blog</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
