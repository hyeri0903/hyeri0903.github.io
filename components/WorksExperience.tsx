import React from "react";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";

const WorkExperience = () => {
  return (
    <section className="px-4 py-8 dark:bg-black transition-colors duration-200">
      {/* max-width + 중앙 정렬 */}
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Work Experience
        </h2>
        {/* 경력 내용 */}
        <div className="mt-2 space-y-8">
          {/* Naver Cloud */}
          <div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  NAVER Cloud
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jun 2023 - Present
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer, Backend Developer
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jeonja, South Korea
                </p>
              <ul className="mt-2 list-disc list-inside text-gray-800 dark:text-gray-300 text-base space-y-1">
                <li>
                  Designed and developed the OpenAPI for NaverWorks Task service, enabling third-party developer integrations.
                </li>
                <li>Led the development of a Kafka-based notification system, improving the reliability of the NaverWorks Task service.
                </li>
                <li>Enhanced system resilience by implementing Circuit Breaker for fault-tolerant service behaviour.
                </li>
                <li>
                Developed email and message notification using Spring Boot and Java for the Multilingual Management System.
                </li>
              </ul>
          </div>

          {/* Works Mobile */}
          <div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  NAVER Cloud (formerly WorksMobile)
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sep 2021 - Jun 2023
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer, Backend Developer
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                  Pangyo, South Korea
              </p>
             
              <ul className="mt-2 list-disc list-inside text-gray-800 dark:text-gray-300 text-base space-y-1">
                <li>Contributed to develop of the services’s centralised logging system for better observability.</li>
                <li>Led migration of the legacy Multilingual Management System from Python based architecture to Java and React based stack.</li>
              </ul>
          </div>
           {/* Intern - Works Mobile */}
           <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer, Intern
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jul 2021 - Aug 2021
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                  Pangyo, South Korea
              </p>
             
              <ul className="mt-2 list-disc list-inside text-gray-800 dark:text-gray-300 text-base space-y-1">
                <li>Built a full-stack web application using Java, Spring Boot, MySQL and Vue.js.</li>
                <li>Achieved 94% unit test coverage using Unit to ensure high code quality.</li>
                <li>
                  Designed and documented RESTful APIs using Swagger.
                </li>
              </ul>
          </div>

           {/* Shinesegae */}
           <div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Shinsegae I&C
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jan 2020 - Mar 2020
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Seongsu, South Korea
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-800 dark:text-gray-300 text-base space-y-1">
                <li>
                  Maintained and managed the E-mart Information Analysis System, handling large-scale product and sales data.
                </li>
                <li>
                  Created and optimised SQL queries based on business requirements.
                </li>
                <li>
                  Automated data validation process using Python, improving operational efficiency.
                </li>
                <li>
                  Developed and executed complex data processing logic using MySQL and MyBatis.
                </li>
              </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
