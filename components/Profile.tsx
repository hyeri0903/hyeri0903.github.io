'use client'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import Image from "next/image";


export default function Profile() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-200 dark:bg-black transition-colors justify-center">
      <div className="max-w-3xl md:w-2/3 flex-shrink-0 flex flex-col px-20 justify-center">
        <div className="flex items-center justify-center">
          <Image src="/profile.png" alt="rabbit" width={300} height={300} />
        </div>
         
        <h2 className="text-left text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Profile
        </h2>
       
        <div className="mt-5 text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
          Backend developer with 4+ years of experience building and scaling web server using Java and Kotlin. 
          Skilled in B2B services, distributed systems, and building maintainable architectures. 
          Strong communicator who bridges the gap between technical and non-technical stakeholders.
        </div>
      </div>
      {/* Profile Content (우측) */}
      <div className="md:w-1/3 flex flex-col justify-center px-20 py-5">
        <h2 className="text-left text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          About me
        </h2>
        <div className="lg:w-full sm:w-full h-[1px] bg-black dark:bg-white mt-2 mb-3"></div>
        <div>
          <ul className="space-y-3">
              <li className="dark:text-gray-300">
                <div className="flex items-center">
                  <FaLocationDot className="w-4 h-4"/>
                  <span className="ml-2">Republic of Korea</span>
                </div>
              </li>
              <li className="dark:text-gray-300">
                <div className="flex items-center">
                  <MdEmail className="w-4 h-4"/>
                  <span className="ml-2">hyerijung0903@gmail.com</span>
                </div>
              </li>
              <li className="dark:text-gray-300 hover:underline cursor-pointer">
                <div className="flex items-center">
                  <BsLinkedin />
                  <a href="https://www.linkedin.com/in/hyerijung/" target="_blank" rel="noopener noreferrer">
                    <span className="ml-2">LinkedIn</span>
                  </a>
                </div>
              </li>
              <li className="dark:text-gray-300 hover:underline cursor-pointer">
                <div className="flex items-center">
                  <FaGithub />
                  <a href="https://github.com/hyeri0903" target="_blank" rel="noopener noreferrer">
                    <span className="ml-2">GitHub</span>
                  </a>
                </div>
              
              </li>
              <li className="dark:text-gray-300 hover:underline cursor-pointer">
                <div className="flex items-center">
                  <SiTistory className="w-3 h-3"/>
                  <a href="https://hyeri0903.tistory.com/" target="_blank" rel="noopener noreferrer">
                    <span className="ml-2">Tech Blog</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <h2 className="mt-20 text-left text-2xl md:text-3xl font-bold text-gray-900 dark:text-white w-full">
            Skills
          </h2>
          <div className="lg:w-full sm:w-full h-[1px] bg-black dark:bg-white mt-2 mb-3"></div>
          <div className="text-baseleading-relaxed text-gray-700 dark:text-gray-300 font-normal">
            <ul>
              <li>- Java, Kotlin, Python, React</li>
              <li>- Spring Boot, Kafka, Swagger, Git</li>
              <li>- MySQL, MongoDB</li>
              <li>- TDD, REST APIs, Agile/Scrum</li>
            </ul>
          </div>
      </div>
    </section>
  );
}
