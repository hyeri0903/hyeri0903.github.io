'use client'
// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { BsLinkedin } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";
// import { SiTistory } from "react-icons/si";
// import Image from "next/image";
import { aosProps } from "utils/aosConfig";


export default function Profile() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-[#ece7e1] dark:bg-black transition-colors">
      <div className="w-full md:w-[50%] md:ml-[15%] flex-shrink-0 flex flex-col px-4 md:px-20 justify-center gap-5">
        <div>
          <h2 {...aosProps} className="font-playfairsc text-6xl md:text-[7vw] font-light leading-[1em] text-gray-900 dark:text-white">
            Hyeri
          </h2>
        </div>
        <div className="font-dmserif mt-5 text-2xl md:text-[2vw] font-light leading-[1em] text-gray-900 dark:text-white">
          I'm Hyeri-Jung. A software engineer, web developer and problem solver.
        </div>
       
        <div className="font-montserrat mt-5 text-[16px] leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
          Backend developer with 4+ years of experience building and scaling web server using Java and Kotlin. 
          Skilled in B2B services, distributed systems, and building maintainable architectures. 
          Strong communicator who bridges the gap between technical and non-technical stakeholders.
        </div>

        <div>
          <div className="font-dmserif mt-5 text-2xl font-light leading-[1em] text-gray-900 dark:text-white">
            Skills
          </div>
          <div className="font-montserrat mt-3 text-[16px] leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
            Java, Kotlin, React, Spring Boot, Kafka, Swagger <br />
            MySQL, MongoDB, Git, TDD, REST API, Agile/Scrum
          </div>
        </div>

        <div>
          <div className="font-dmserif mt-5 text-2xl font-light leading-[1em] text-gray-900 dark:text-white">
            Education
          </div>
          <div className="font-montserrat mt-3 text-[16px] leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
            B.S. in Computer Science, Kookmin University <br />
            Seoul, South Korea
          </div>
        </div>
        <div className="mt-5 mb-10 md:mb-20">
          {/* <button
            rel="noopener noreferrer"
            className="px-6 py-3 font-montserrat bg-black dark:bg-white text-white dark:text-black rounded-full hover:px-10 transition-all duration-300 ease-in-out"
          >
            Contact me
          </button> */}
           <div className="font-dmserif mt-5 text-2xl font-light leading-[1em] text-gray-900 dark:text-white">
            Contact me
          </div>
          <div className="font-montserrat mt-3 text-[16px] leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
            Email: hyerijung0903@gmail.com <br/>
            <a href="https://www.linkedin.com/in/hyerijung/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <span>LinkedIn</span>
            </a> / <a href="https://github.com/hyeri0903" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <span>GitHub</span>
            </a> / <a href="https://hyeri0903.tistory.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <span>Tech Blog</span>
            </a>
          </div>
          
        </div>
      </div>
     
      {/* Profile Content (우측) */}
      {/* <div className="w-full md:w-1/3 flex flex-col justify-center px-4 md:px-20 py-5">
        <h2 className="mt-5 text-left text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
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
          <h2 className="mt-20 text-left text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Skills
          </h2>
          <div className="lg:w-full sm:w-full h-[1px] bg-black dark:bg-white mt-2 mb-3"></div>
          <div className="text-base leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
            <ul className="space-y-3">
              <li>- Java, Kotlin, Python, React</li>
              <li>- Spring Boot, Kafka, Swagger, Git</li>
              <li>- MySQL, MongoDB</li>
              <li>- TDD, REST APIs, Agile/Scrum</li>
            </ul>
          </div>
      </div> */}
    </section> 
  );
}
