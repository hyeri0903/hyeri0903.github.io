'use client';

import Mbti2trip from "./projects/Mbti2trip";
import Mobileinvitations from "./projects/Mobileinvitations";
import { aosProps } from '../utils/aosConfig';

export default function Projects() {
  return (
    <section className="px-4 py-16 bg-gray-200 dark:bg-black transition-colors duration-200">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>
        {/* 프로젝트 박스 */}
        <div className="relative inline-block text-2xl text-gray-900 dark:text-white mb-8 after:content-[''] after:block after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1.5 after:bg-blue-300 after:z-0 z-10">
          <h3 className="font-bold text-primary">Personal Side Projects</h3>
        </div>
        <div className="flex flex-col gap-y-4 md:gap-y-4">
          <div {...aosProps}><Mbti2trip /></div>
          <div {...aosProps}><Mobileinvitations /></div>
        </div>
        
      </div>
    </section>
  );
}
